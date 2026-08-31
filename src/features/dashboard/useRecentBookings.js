import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = Number(searchParams.get("days")) || 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const {
    isPending,
    data: bookingDate,
    error,
  } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["booking", `last-${numDays}`],
  });
  return { isPending, bookingDate, numDays, error };
}

export default useRecentBookings;
