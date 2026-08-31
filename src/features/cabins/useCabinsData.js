import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabinsData() {
  const {
    data: cabinData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return { cabinData, isLoading, isError, error };
}
