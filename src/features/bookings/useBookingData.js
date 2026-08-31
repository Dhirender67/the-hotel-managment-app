import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookingsData } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constans";

function useBookingData() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("bookingFilter") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          checkedOut: "checked-out",
          checkedIn: "checked-in",
          unconfirmed: "Unconfirmed",
        }[filterValue];

  // SORT
  const sorting = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sorting.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //QUERY
  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookingsData({ filter, sortBy, page }),
  });

  //PRE-FETCHING // PrefetchQuery means 1 page pehel load kar lete hai for user exprince
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookingsData({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookingsData({ filter, sortBy, page: page - 1 }),
    });

  return {
    bookings,
    isLoading,
    count,
    error,
  };
}

export default useBookingData;
