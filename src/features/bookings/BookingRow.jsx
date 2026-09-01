import { format, isToday } from "date-fns";
import Menus from "../../ui/Menus";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { HiMiniEye, HiOutlineBanknotes, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import useCheckOut from "../check-in-out/useCheckOut";
import useDeleteBooking from "./useDeleteBooking";

function BookingRow({ bookingData }) {
  const {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNight,
    numGuset,
    totalPrice,
    status,
    guest: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = bookingData;
  const { checkOutMutate, isCheckOut } = useCheckOut();
  const { deleteBookingMutate, isBookingDeleting } = useDeleteBooking();
  const statusToClassName = {
    Unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const navigate = useNavigate();

  return (
    <Table.Row>
      <Table.Cell>{cabinName} </Table.Cell>

      <Table.Cell>
        <div className="flex flex-col">
          <span>{guestName}</span>
          <span className="text-blue-700 font-semibold text-sm">{email}</span>
        </div>
      </Table.Cell>

      <Table.Cell>
        <div className="flex flex-col">
          <span>
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}{" "}
            &rarr; {numNight} night stay
          </span>
          <span className="text-neutral-500 text-sm font-semibold">
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </div>
      </Table.Cell>

      <Table.Cell>
        <Tag type={statusToClassName[status]}>{status?.replace("-", " ")}</Tag>
      </Table.Cell>

      <Table.Cell>{formatCurrency(totalPrice)} </Table.Cell>

      <Table.Cell>
        <div className="flex items-center h-full">
          <Menus.Menu>
            <Menus.Toggle id={bookingId} />
            <Menus.List id={bookingId}>
              <Menus.Button onClick={() => navigate(`/bookingDT/${bookingId}`)}>
                <div className="flex gap-2 items-center">
                  <HiMiniEye /> See Details
                </div>
              </Menus.Button>
              {status === "Unconfirmed" && (
                <Menus.Button onClick={() => navigate(`/checkIn/${bookingId}`)}>
                  <div className="flex gap-2 items-center">
                    <HiOutlineBanknotes />
                    Check-In
                  </div>
                </Menus.Button>
              )}
              {status === "checked-in" && (
                <Menus.Button
                  onClick={() => checkOutMutate(bookingId)}
                  disabled={isCheckOut}
                >
                  <div className="flex gap-2 items-center">
                    <HiOutlineBanknotes />
                    Check-Out
                  </div>
                </Menus.Button>
              )}
              <Menus.Button onClick={() => deleteBookingMutate(bookingId)}>
                <div className="flex gap-2 items-center">
                  {isBookingDeleting ? (
                    "Deleting..."
                  ) : (
                    <>
                      <HiTrash /> Delete Bookings
                    </>
                  )}
                </div>
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default BookingRow;
