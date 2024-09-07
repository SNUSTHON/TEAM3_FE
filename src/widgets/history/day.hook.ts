import { CreatedAt } from "../../entities/day/day.model";
import { mockCounts } from "./day.mock";
import { Count } from "./day.type";

export const useGetCount = (createdAt: CreatedAt): Count => {
	const counts = mockCounts;
	const count = Math.min(counts.find((day) => day.createdAt === createdAt)?.count ?? 0, 5);
	return count as Count;
};
