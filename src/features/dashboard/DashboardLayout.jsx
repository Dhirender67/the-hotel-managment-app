import useRecenStays from "./useRecenStays";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DashboardBox from "./DashboardBox";

function DashboardLayout() {
  const { isPending, bookingDate, numDays } = useRecentBookings();
  const { isPending: isStayPendding, confirmStays } = useRecenStays();

  if (isPending || isStayPendding) return <Spinner size="w-6 h-6" />;

  return (
    <>
      <div className="flex gap-4 flex-col mt-6">
        <Stats bookingDate={bookingDate} confirmStays={confirmStays} />
        <DashboardBox confirmStays={confirmStays} />
        <SalesChart bookingDate={bookingDate} numDays={numDays} />
      </div>
    </>
  );
}

export default DashboardLayout;
