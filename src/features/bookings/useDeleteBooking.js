import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBookingMutate, isPending: isBookingDeleting } =
    useMutation({
      mutationFn: deleteBooking,
      onSuccess: (data) => {
        console.log("DATA DELETE", data);
        toast.success(`Booking No  Successfuly Deleted`);
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  return { deleteBookingMutate, isBookingDeleting };
}

export default useDeleteBooking;
