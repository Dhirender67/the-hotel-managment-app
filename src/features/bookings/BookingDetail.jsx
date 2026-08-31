import useBookingDT from "./useBookingDT";
import { useMoveBack } from "../../hooks/useMoveBack";
import { HiOutlineBanknotes } from "react-icons/hi2";

import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

import useUnconfirmed from "../check-in-out/useUnconfirmed";
import useCheckOut from "../check-in-out/useCheckOut";

export default function BookingDetail() {
  const { booking = {}, isLoadingDetails } = useBookingDT();

  const navigate = useNavigate();
  const moveBack = useMoveBack();

  const { status, id: bookingId } = booking;
  const { unconfirmedMutate, isUnConfirm } = useUnconfirmed();
  const { checkOutMutate, isCheckOut } = useCheckOut();

  if (isLoadingDetails) return <Spinner />;
  const statusToTagName = {
    Unconfirmed: "bg-blue-100 text-blue-700",
    "checked-in": "bg-green-100 text-green-700",
    "checked-out": "bg-gray-200 text-gray-700",
  };

  function handelUnconfirmed() {
    unconfirmedMutate(bookingId);
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[2.4rem]">
          <h1 className="text-2xl font-semibold">Booking #{bookingId}</h1>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              statusToTagName[status]
            }`}
          >
            {status.replace("-", " ")}
          </span>
        </div>

        <button
          onClick={moveBack}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          &larr; Back
        </button>
      </div>

      {/* Booking Data */}
      <div className="mt-6">
        <BookingDataBox booking={booking} />
      </div>

      {/* Bottom Button */}
      <div className="mt-6 flex gap-3 justify-end">
        {status === "checked-in" && (
          <Button
            variation="primary"
            onClick={() => checkOutMutate(bookingId)}
            disabled={isUnConfirm}
          >
            Check-Out
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            variation="warning"
            onClick={handelUnconfirmed}
            disabled={isUnConfirm}
          >
            Unconfirm
          </Button>
        )}

        {status === "Unconfirmed" && (
          <Button
            variation="primary"
            onClick={() => navigate(`/checkIn/${bookingId}`)}
          >
            <div className="flex gap-2 items-center">
              <HiOutlineBanknotes />
              Check-In
            </div>
          </Button>
        )}
        <Button variation="ternary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
}
