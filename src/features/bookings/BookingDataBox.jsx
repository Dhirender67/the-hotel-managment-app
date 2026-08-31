import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyRupee,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

function BookingDataBox({ booking = {} }) {
  const {
    created_at,
    startDate,
    endDate,
    numNight,
    numGuset,
    cabinPrice,
    extraPrice,
    totalPrice,
    hasBreakFast,
    isPaid,
    guest: {
      fullName: guestName,
      email,
      nationality,
      countryFlags,
      nationalId,
    } = {},
    cabins: { name: cabinName, description } = {},
  } = booking;

  return (
    <section className="overflow-hidden rounded-md bg-white">
      {/* Header */}
      <header className="flex items-center justify-between bg-indigo-600 px-4 py-2 text-lg font-medium text-white">
        <div className="flex items-center gap-6 text-[1.8rem] font-semibold">
          <HiOutlineHomeModern className="h-8 w-8" />

          <p>
            {numNight} nights in Cabin{" "}
            <span className="ml-1 font-['Sono'] text-lg">{cabinName}</span>
          </p>
        </div>

        <div className="">
          <p>
            <span>Start Date</span> &mdash;
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            )
          </p>
          <p>
            <span>End Date</span>
            &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>
        </div>
      </header>

      {/* Section */}
      <section className="px-6 pb-5 pt-8">
        {/* Guest */}
        <div className="mb-6 flex items-center gap-5 text-gray-500">
          {countryFlags && (
            <img
              width="20"
              src="https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/512px/1f1ee-1f1f3.png"
              alt={`Flag of ${nationality}`}
            />
          )}

          <p className="font-medium text-gray-700">
            {guestName} {numGuset > 1 ? `+ ${numGuset - 1} guests` : ""}
          </p>

          <span>&bull;</span>

          <p className="text-blue-600 underline font-semibold">{email}</p>

          <span>&bull;</span>

          <p>
            National ID <b className="text-black">{nationalId}</b>
          </p>
        </div>

        {/* Observations */}
        {description && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Description"
          >
            {description}
          </DataItem>
        )}

        {/* Breakfast */}
        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakFast ? "Yes" : "No"}
        </DataItem>

        {/* Price */}
        <div
          className={`mt-6 flex items-center justify-between rounded-sm px-8 py-4 ${
            isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          <DataItem icon={<HiOutlineCurrencyRupee />} label="Total price">
            {formatCurrency(totalPrice)}

            {hasBreakFast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extraPrice,
              )} breakfast)`}
          </DataItem>

          <p className="text-[1.4rem] font-semibold uppercase">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-4 text-right text-[1.2rem] text-gray-500">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
