import useTodayActivity from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

function Today() {
  const { isPending, todayActiviy } = useTodayActivity();
  console.log("ACTIVITY", todayActiviy);
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold dark:text-white">Today</h2>
        {!isPending ? (
          <>
            {todayActiviy?.length > 0 ? (
              <div className="flex gap-2">
                {todayActiviy.map((activity) => (
                  <TodayItem activity={activity} key={activity.id} />
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <h2 className="text-lg font-semibold text-neutral-500">
                  No Activity Today
                </h2>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default Today;
