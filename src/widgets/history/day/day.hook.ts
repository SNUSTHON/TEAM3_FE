import { CreatedAt } from "../../../entities/day/day.model";
import { useGetMonthHistory } from "../../../features/history/history.hook";
import { Count } from "./day.type";

export const useGetCount = (createdAt: CreatedAt): Count => {
	const { data: counts } = useGetMonthHistory();
	const count = Math.min(counts?.find((day) => day.createdAt === createdAt)?.count ?? 0, 5);
	return count as Count;
};
