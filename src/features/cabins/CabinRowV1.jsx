import {
  HiDocumentDuplicate,
  HiOutlineTrash,
  HiPencilSquare,
} from "react-icons/hi2";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabins } from "./useDeleteCabins";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
function CabinRow({ cabinData }) {
  const {
    id: cabinID,
    name,
    maxCapacity,
    regularPrice,
    discount,
    images,
  } = cabinData;

  const { isDeleting, deleteCabinMutate } = useDeleteCabins();
  const { isLoadingCabin, createCabinMutate } = useCreateCabin();

  function handleDuplicate() {
    createCabinMutate({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      images,
    });
  }

  return (
    <>
      <Table.Row>
        <Table.Cell>
          <img
            src={images || "./empty-thumbnail.jpg"}
            alt={name}
            className="w-16 h-auto rounded-lg"
          />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>Fit Up to {maxCapacity} Guest</Table.Cell>
        <Table.Cell>{formatCurrency(regularPrice)}</Table.Cell>
        <Table.Cell>{formatCurrency(discount)}</Table.Cell>
        <Table.Cell>
          <div className="flex gap-2 justify-end">
            <Button variation="primary" onClick={handleDuplicate}>
              {isLoadingCabin ? (
                <Spinner size="w-4 h-4" color="border-white border-4" />
              ) : (
                <HiDocumentDuplicate />
              )}
            </Button>
            <Modal>
              <Modal.Open opens="open-edit">
                <Button variation="primary">
                  <HiPencilSquare />
                </Button>
              </Modal.Open>
              <Modal.Window name="open-edit">
                <CreateCabinForm cabinToEdit={cabinData} />
              </Modal.Window>
              <Modal.Open opens="confirm-delete">
                <Button variation="danger">
                  <HiOutlineTrash />
                </Button>
              </Modal.Open>
              <Modal.Window name="confirm-delete">
                <ConfirmDelete
                  resourceName="Cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabinMutate(cabinID)}
                />
              </Modal.Window>
            </Modal>
          </div>

          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={cabinID} />

              <Menus.List id={cabinID}>
                <Menus.Button onClick={handleDuplicate}>
                  {isLoadingCabin ? (
                    <Spinner size="w-4 h-4" color="border-blue-600 border-4" />
                  ) : (
                    <div className="flex gap-2 items-center">
                      <HiDocumentDuplicate /> <span>Duplicate</span>
                    </div>
                  )}
                </Menus.Button>
                <Menus.Button>Edit</Menus.Button>
                <Menus.Button>Delete</Menus.Button>
              </Menus.List>
            </Menus.Menu>
          </Menus>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default CabinRow;
