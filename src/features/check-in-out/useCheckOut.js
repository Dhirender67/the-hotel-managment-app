import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckOut() {
  const queryClient = useQueryClient();
  //   const navigate = useNavigate();

  const { mutate: checkOutMutate, isPending: isCheckOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully Checked Out`);

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      //   navigate("/");
    },

    onError: () => {
      toast.error("There was something wrong checking out");
    },
  });

  return { checkOutMutate, isCheckOut };
}

export default useCheckOut;
