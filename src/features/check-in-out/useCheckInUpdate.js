import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckInUpdate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkInMutate, isPending: isCheckIn } = useMutation({
    mutationFn: ({ bookingId, breakfastData }) =>
      updateBooking(bookingId, {
        // Update these mentioned Status,isPaid,BreakFast
        status: "checked-in",
        isPaid: true,
        ...breakfastData,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfuly Checked In`);
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      navigate("/");
    },
    onError: () => toast.error("There was Somthing Error Checking In"),
  });
  return { checkInMutate, isCheckIn };
}

export default useCheckInUpdate;
