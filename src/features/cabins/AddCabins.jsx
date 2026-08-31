import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
function AddCabins() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button variation="primary">Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

// function AddCabins() {
//   const [isOpenModel, setIsOpenModel] = useState(false);
//   return (
//     <>
//       <div className="mt-4 text-right">
//         <Button
//           variation="primary"
//           onClick={() => setIsOpenModel((show) => !show)}
//         >
//           Add New Cabins
//         </Button>
//       </div>
//       {isOpenModel && (
//         <Modal onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabins;
