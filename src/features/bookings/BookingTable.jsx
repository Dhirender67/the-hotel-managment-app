import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import BookingRow from "./BookingRow";
import useBookingData from "./useBookingData";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings = [], isLoadingData, count } = useBookingData();
  if (isLoadingData) return <Spinner />;
  if (!bookings) return <Empty resource="Booking" />;

  return (
    <Menus>
      <Table>
        <Table.Header>
          <Table.Head>Cabin</Table.Head>
          <Table.Head>Guest</Table.Head>
          <Table.Head>Dates</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Amount</Table.Head>
          <Table.Head></Table.Head>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} bookingData={booking} />
          )}
        ></Table.Body>
      </Table>
      <Pagination count={count} />
    </Menus>
  );
}

export default BookingTable;
