import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function addNewEditCabins(newCabins, id) {
  const hasImagePath =
    typeof newCabins.images === "string" &&
    newCabins.images.startsWith(supabaseUrl);

  const imagesName = `${Math.random()}-${newCabins.images.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImagePath
    ? newCabins.images
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imagesName}`;

  //https://nwqisqvjylpfdtwegwni.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Create and Edit Cabin
  let query = supabase.from("cabins");

  //A. CREATE
  if (!id) query = query.insert([{ ...newCabins, images: imagePath }]);

  //B EDIT
  if (id)
    query = query.update([{ ...newCabins, images: imagePath }]).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins Could not be Created");
  }

  // 2. Upload Images
  if (hasImagePath) return data;
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imagesName, newCabins.images);

    // If image upload mai issue ayega to DB mai store nahi hoga
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);

      throw new Error("Cabin image could not be uploaded.");
    }
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins Could not be Deleted");
  }
}
