import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabins } from "./useEditCabins";

function CreateCabinForm({ cabinToEdit = {}, onCloseModel }) {
  // Custom Hooks for CREATE and EDIT
  const { createCabinMutate } = useCreateCabin();
  const { editCabinMutate } = useEditCabins();

  //Edit Cabin ID
  const { id: editID, ...editValue } = cabinToEdit;
  const isEditableSession = Boolean(editID);

  // Form Validation
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditableSession ? editValue : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const images =
      typeof data.images === "string" ? data.images : data.images[0];

    if (isEditableSession) {
      editCabinMutate(
        {
          data: { ...data, images },
          id: editID,
        },
        { onSuccess: () => (reset(), onCloseModel()) },
      );
      return;
    }

    createCabinMutate(
      {
        ...data,
        images,
      },
      {
        onSuccess: (data) => {
          (reset(), onCloseModel());
        },
      },
    );
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <>
      <div className="max-w-3xl mt-3 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* Cabin Name */}
          <div className="feild-row">
            <label htmlFor="name" className="label">
              Cabin name
            </label>

            <input
              id="name"
              {...register("name", { required: "This feild is required" })}
              type="text"
              className="form-control"
            />
            {errors.name && (
              <span className="feild-error">{errors.name.message}</span>
            )}
          </div>

          {/* Maximum Capacity */}
          <div className="feild-row">
            <label htmlFor="maxCapacity" className="label">
              Maximum capacity
            </label>

            <input
              id="maxCapacity"
              {...register("maxCapacity", {
                required: "This feild is required",
                min: {
                  value: 1,
                  message: "Capacity should be at least 1",
                },
              })}
              type="number"
              className="form-control"
            />
            {errors.maxCapacity && (
              <span className="feild-error">{errors.maxCapacity.message}</span>
            )}
          </div>

          {/* Regular Price */}
          <div className="feild-row">
            <label htmlFor="regularPrice" className="label">
              Regular price
            </label>

            <input
              id="regularPrice"
              {...register("regularPrice", {
                required: "This feild is required",
                min: {
                  value: 1,
                  message: "Regular price should be at least 1",
                },
              })}
              type="number"
              className="form-control"
            />
            {errors.regularPrice && (
              <span className="feild-error">{errors.regularPrice.message}</span>
            )}
          </div>

          {/* Discount */}
          <div className="feild-row">
            <label htmlFor="discount" className="label">
              Discount
            </label>

            <input
              id="discount"
              {...register("discount", {
                required: "This feild is required",
                validate: (value) =>
                  value <= getValues().regularPrice ||
                  "Discount Should be less then Regular Price",
              })}
              type="number"
              defaultValue={0}
              className="form-control"
            />
            {errors.discount && (
              <span className="feild-error">{errors.discount.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="feild-row">
            <label htmlFor="description" className="label">
              Description for website
            </label>

            <textarea
              id="description"
              {...register("description", {
                required: "This feild is required",
              })}
              rows={4}
              className="form-control"
            />
            {errors.description && (
              <span className="feild-error">{errors.description.message}</span>
            )}
          </div>

          {/* Photo */}
          <div className="feild-row">
            <label htmlFor="images" className="label">
              Cabin photo
            </label>

            <input
              id="images"
              {...register("images", {
                required: isEditableSession ? false : "This feild is required",
              })}
              type="file"
              className="w-full max-w-sm text-sm file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-700"
            />
            {errors.images && (
              <span className="feild-error">{errors.images.message}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 px-6 py-4">
            <Button
              onClick={() => onCloseModel()}
              variation="ternary"
              type="reset"
            >
              Cancel
            </Button>
            <Button type="submit" variation="primary">
              {isEditableSession ? "Edit Cabin" : "Add New Cabin"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateCabinForm;
