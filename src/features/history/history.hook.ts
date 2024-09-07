import { useQuery } from "@tanstack/react-query";
import { getDailyHistory, getMonthHistory } from "./history";
import { endDate, startDate } from "../../widgets/history/day/day.const";
import { CreatedAt } from "../../entities/day/day.model";

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

export const useGetDailyHistory = (date: CreatedAt) => {
	const { data, isLoading } = useQuery({
		queryKey: ["dailyHistory", date],
		queryFn: () => getDailyHistory(date),
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};
