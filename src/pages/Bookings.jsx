import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold">All Bookings</h1>
        <BookingTableOperations />
      </div>
      <div className="relative">
        <BookingTable />
      </div>
    </>
  );
}

export default Bookings;
