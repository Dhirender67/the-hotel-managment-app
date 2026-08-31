import AddCabins from "../features/cabins/AddCabins";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOpration from "../features/cabins/CabinTableOpration";

function Cabins() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold">All cabins</h1>
        <CabinTableOpration />
      </div>
      <div className="relative">
        <CabinTable />
        <div className="mt-4 flex gap-2">
          <AddCabins />
        </div>
      </div>
    </>
  );
}

export default Cabins;
