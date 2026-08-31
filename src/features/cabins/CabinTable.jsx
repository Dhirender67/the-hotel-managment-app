import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabinsData } from "./useCabinsData";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const [searchParams] = useSearchParams();
  const { cabinData = [], isLoading, isError, error } = useCabinsData();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Filter Method
  const filterVal = searchParams.get("discount") || "all";
  let filtredCabins;
  if (filterVal === "all") filtredCabins = cabinData;
  if (filterVal === "no-discount")
    filtredCabins = cabinData.filter((cabins) => cabins.discount === 0);
  if (filterVal === "discount")
    filtredCabins = cabinData.filter((cabins) => cabins.discount > 0);

  // 2. Sort By
  const sortBy = searchParams.get("sortBy") || "name-asc";
  if (sortBy === "name-asc")
    filtredCabins.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "name-desc")
    filtredCabins.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "regularPrice-asc")
    filtredCabins.sort((a, b) => a.regularPrice - b.regularPrice);
  if (sortBy === "regularPrice-desc")
    filtredCabins.sort((a, b) => b.regularPrice - a.regularPrice);
  if (sortBy === "maxCapacity-asc")
    filtredCabins.sort((a, b) => a.maxCapacity - b.maxCapacity);
  if (sortBy === "maxCapacity-desc")
    filtredCabins.sort((a, b) => b.maxCapacity - a.maxCapacity);

  return (
    <>
      <Menus>
        <Table>
          <Table.Header>
            <Table.Head></Table.Head>
            <Table.Head>Cabin</Table.Head>
            <Table.Head>Capacity</Table.Head>
            <Table.Head>Price</Table.Head>
            <Table.Head>Discount</Table.Head>
            <Table.Head></Table.Head>
          </Table.Header>
          <Table.Body
            // data={cabinData} // without fiilter
            data={filtredCabins} // with Filter
            render={(cabinItem) => (
              <CabinRow key={cabinItem.id} cabinData={cabinItem} />
            )}
          />
        </Table>
      </Menus>
    </>
  );
}

export default CabinTable;
