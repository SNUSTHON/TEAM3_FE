import { CreatedAt, DayHistoryList } from "../../entities/day/day.model";
import { Count } from "./day.type";

export const useGetCount = (createdAt: CreatedAt): Count => {
	const counts: DayHistoryList = [
		{
			createdAt: "2024-09-01",
			count: 5,
		},
		{
			createdAt: "2024-09-02",
			count: 6,
		},
		{
			createdAt: "2024-08-11",
			count: 2,
		},
		{
			createdAt: "2024-09-07",
			count: 3,
		},
		{
			createdAt: "2024-08-16",
			count: 1,
		},
	];
	const count = Math.min(counts.find((day) => day.createdAt === createdAt)?.count ?? 0, 5);
	return count as Count;
};
