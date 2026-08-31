import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

function useRecenStays() {
  const [searchParams] = useSearchParams();

  const numStays = Number(searchParams.get("days")) || 7;

  const queryDate = subDays(new Date(), numStays).toISOString();

  const {
    isPending,
    data: recentStayData,
    error,
  } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["bookings", `last-${numStays}`],
  });

  const confirmStays = recentStayData?.filter((stay) =>
    ["checked-in", "checked-out"].includes(stay.status),
  );

  return {
    isPending,
    recentStayData,
    confirmStays,
    error,
  };
}

export default useRecenStays;
