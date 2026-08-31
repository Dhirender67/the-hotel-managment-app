import {
  HiOutlineUsers,
  HiCurrencyRupee,
  HiCalendarDateRange,
  HiChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookingDate, confirmStays }) {
  // 1. Booking
  const numBooking = bookingDate?.length;

  // 2. Sales
  const salePrice = bookingDate?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. Chek Ins
  const checkIns = confirmStays?.length;

  // 4. Occupancy
  const occupancy = confirmStays?.reduce((acc, cur) => acc + cur.numNight, 0);

  return (
    <>
      <div className="flex gap-3">
        <Stat
          title="Booking"
          color="blue"
          icon={<HiOutlineUsers className="w-6 h-6" />}
          value={numBooking}
        />
        <Stat
          title="Salse"
          color="green"
          icon={<HiCurrencyRupee className="w-6 h-6" />}
          value={formatCurrency(salePrice)}
        />
        <Stat
          title="Check ins"
          color="yellow"
          icon={<HiCalendarDateRange className="w-6 h-6" />}
          value={checkIns}
        />
        <Stat
          title="Occupancy Rate"
          color="indigo"
          icon={<HiChartBar className="w-6 h-6" />}
          value={occupancy + "%"}
        />
      </div>
    </>
  );
}

export default Stats;
