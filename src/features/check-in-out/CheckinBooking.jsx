import { useState } from "react";
import useBookingDT from "../bookings/useBookingDT";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import useCheckInUpdate from "./useCheckInUpdate";
import { useSettings } from "../settings/useSettings";

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const { booking = {}, isLoadingDetails } = useBookingDT();
  //useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkInMutate, isCheckIn } = useCheckInUpdate();
  const { settingData, isSettingLoad } = useSettings();

  if (isLoadingDetails || isSettingLoad) return <Spinner />;

  const {
    id: bookingId,
    guest: { fullName },
    totalPrice,
    numGuset,
    hasBreakFast,
    numNight,
  } = booking;

  const optinalBreakFastPrice =
    settingData.breakfastPrice * numGuset * numNight;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (breakfast) {
      checkInMutate({
        bookingId,
        breakfastData: {
          hasBreakFast: true,
          extraPrice: optinalBreakFastPrice,
          totalPrice: totalPrice + optinalBreakFastPrice,
        },
      });
    } else {
      checkInMutate({ bookingId, breakfast: {} });
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
          Check in booking #{bookingId}
        </h1>

        <button
          onClick={moveBack}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          &larr; Back
        </button>
      </div>

      {/* Booking Details */}
      <div className="rounded-md border border-gray-200 bg-white">
        <BookingDataBox booking={booking} />
      </div>

      {/*Breakfast Checkbox*/}
      {!hasBreakFast && (
        <div className="flex items-center gap-2 bg-white p-4 rounded">
          <input
            checked={breakfast}
            disabled={breakfast}
            onChange={() => {
              (setBreakfast((breakfast) => !breakfast), setConfirmPaid(false));
            }}
            type="checkbox"
            id="breakfast"
            className="h-4 w-4"
          />

          <label htmlFor="breakfast" className="text-sm">
            Want to add Breakfast for{" "}
            <b>{formatCurrency(optinalBreakFastPrice)}</b>
          </label>
        </div>
      )}

      {/*Confirm Paid Checkbox*/}
      <div className="flex items-center gap-2 bg-white p-4 rounded">
        <input
          checked={confirmPaid}
          disabled={confirmPaid || isCheckIn}
          onChange={() => setConfirmPaid((checked) => !checked)}
          type="checkbox"
          id="confirm"
          className="h-4 w-4"
        />

        <label htmlFor="confirm" className="text-sm">
          I confirm that {fullName} has paid the total Amount of{" "}
          <b>
            {" "}
            {!breakfast
              ? formatCurrency(totalPrice)
              : `${formatCurrency(totalPrice + optinalBreakFastPrice)} breaks into (${formatCurrency(totalPrice) + "+" + formatCurrency(optinalBreakFastPrice)})`}
          </b>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-4">
        <Button
          disabled={!confirmPaid || isCheckIn}
          onClick={handleCheckin}
          variation="primary"
        >
          Check in booking #{bookingId}
        </Button>

        <Button variation="ternary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default CheckinBooking;
