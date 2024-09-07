import { useQuery } from "@tanstack/react-query";
import { getMonthHistory } from "./history";
import { endDate, startDate } from "../../widgets/history/day/day.const";

export const useGetMonthHistory = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["monthHistory"],
		queryFn: () =>
			getMonthHistory({
				startDate: startDate,
				endDate: endDate,
			}),
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};
