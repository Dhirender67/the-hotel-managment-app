import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

function useBookingDT() {
  const { bookingId } = useParams();

  const { data: booking, isPending: isLoadingDetails } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { booking, isLoadingDetails };
}

export default useBookingDT;
