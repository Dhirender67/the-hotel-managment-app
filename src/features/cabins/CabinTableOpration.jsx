import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOpration() {
  return (
    <>
      <TableOperations>
        <Filter />
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "regularPrice-asc", label: "Sort by Price (Low First)" },
            { value: "regularPrice-desc", label: "Sort by Price (High First)" },
            { value: "maxCapacity-asc", label: "Sort by Capacity (Low First)" },
            {
              value: "maxCapacity-desc",
              label: "Sort by Capacity (High First)",
            },
          ]}
        />
      </TableOperations>
    </>
  );
}

export default CabinTableOpration;
