import supabase, { supabaseUrl } from "./supabase";

// SIGNUP SERVICES
export async function signUpAPI({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        fullName,
        avatar: "",
        //dataDemoVaue343: "jhshfdfsdjhfk", //ye Signup kare per userMatadata mai add hoti for test
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// LOGIN SERVICE
export async function getLogin({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Error handel
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  //Data Return
  // console.log(data);
  return data;
}

// CURRENT SERVICE
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

// LOGOUT SERVICES
export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return { error };
}

// UPDATE USER
export async function updateCurrentUser({ fullName, password, avatar }) {
  //1. Update Full Name or Password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  //console.log("API FILE...", updateData);
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  //2. Upload Avatar Image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);
  // console.log("FILE_NAME", fileName);

  //3. Update Avatar by User
  const { data: updateUserNew, error: error2 } = await supabase.auth.updateUser(
    {
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    },
  );

  if (error2) throw new Error(error2.message);

  return updateUserNew;
}
