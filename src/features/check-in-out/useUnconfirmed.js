import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useUnconfirmed() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: unconfirmedMutate, isPending: isUnConfirm } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "Unconfirmed",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully Unconfirmed`);

      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
      navigate("/");
    },

    onError: () => {
      toast.error("There was something wrong Unconfirmed");
    },
  });

  return { unconfirmedMutate, isUnConfirm };
}

export default useUnconfirmed;
