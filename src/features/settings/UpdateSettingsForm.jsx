import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isSettingLoad,
    settingData: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    },
  } = useSettings();
  const { updateSettingMutate, isUpdateSettingLoad } = useUpdateSettings();
  function handleUpdate(e, field) {
    const value = e.target.value;
    console.log(value);
    if (!value) return;
    updateSettingMutate({ [field]: value });
  }

  // const { register, handleSubmit } = useForm(); // ye wala on Submite per chalega
  // function onUpdate(data) {
  //   updateSettingMutate(data);
  // }

  if (isSettingLoad) return <Spinner />;

  return (
    <form className="max-w-xl bg-white p-6 rounded-lg shadow-md space-y-5">
      {/* Minimum Nights */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label htmlFor="min-nights" className="label">
          Minimum nights/booking
        </label>

        <input
          type="number"
          defaultValue={minBookingLength}
          disabled={isUpdateSettingLoad}
          // {...register("minBookingLength")}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          id="min-nights"
          className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Maximum Nights */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label htmlFor="max-nights" className="font-medium text-gray-700">
          Maximum nights/booking
        </label>

        <input
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          id="max-nights"
          className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Maximum Guests */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label htmlFor="max-guests" className="font-medium text-gray-700">
          Maximum guests/booking
        </label>

        <input
          type="number"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
          id="max-guests"
          className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Breakfast Price */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label htmlFor="breakfast-price" className="font-medium text-gray-700">
          Breakfast price
        </label>

        <input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          id="breakfast-price"
          className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
}

export default UpdateSettingsForm;
