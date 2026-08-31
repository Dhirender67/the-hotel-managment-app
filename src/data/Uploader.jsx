import { useState } from "react";
import Button from "../ui/Button";

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);

    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    // Bookings need to be created LAST
    await createGuests();
    await createCabins();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);

    await deleteBookings();
    await createBookings();

    setIsLoading(false);
  }

  return (
    <div
      className="
        mt-auto
        bg-indigo-100
        p-2
        rounded-md
        text-center
        flex
        flex-col
        gap-2
      "
    >
      <Button></Button>
      <span className="font-semibold">SAMPLE DATA</span>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
