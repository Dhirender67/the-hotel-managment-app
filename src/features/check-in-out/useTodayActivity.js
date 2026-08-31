import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

function useTodayActivity() {
  const { isPending, data: todayActiviy } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["booking"],
  });
  return { isPending, todayActiviy };
}

export default useTodayActivity;
