import { useSearchParams } from "react-router-dom";
import { CreatedAt } from "../../../entities/day/day.model";
import { useGetMonthHistory } from "../../../features/history/history.hook";
import { Count } from "./day.type";

export const useGetCount = (createdAt: CreatedAt): Count => {
	const { data: counts } = useGetMonthHistory();
	const count = Math.min(counts?.find((day) => day.createdAt === createdAt)?.count ?? 0, 5);
	return count as Count;
};

export const useGetSelectedDate = () => {
	const [searchParam] = useSearchParams();
	const selectedDay = searchParam.get("createdAt") ?? "2024-09-08";
	return selectedDay;
};
