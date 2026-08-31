import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
import FilterBoking from "./FilterBoking";

function BookingTableOperations() {
  return (
    <TableOperations>
      <FilterBoking />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
