import Today from "../check-in-out/TodayActivity";
import DurationChart from "./DurationChart";

function DashboardBox({ confirmStays }) {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#18212f]">
          <Today />
        </div>
        <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#18212f]">
          <DurationChart confirmStays={confirmStays} />
        </div>
      </div>
    </>
  );
}

export default DashboardBox;
