import Button from "./Button";

function ConfirmDelete({ resourceName, onCloseModel, onConfirm, disabled }) {
  return (
    <div className="flex  flex-col gap-5">
      <h3 className="text-lg font-semibold">Delete {resourceName}</h3>

      <p className="mb-5 text-gray-500">
        Are you sure you want to delete this <b>{resourceName}</b> permanently?
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-4">
        <Button
          variation="ternary"
          onClick={() => onCloseModel()}
          disabled={disabled}
        >
          Cancel
        </Button>

        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
