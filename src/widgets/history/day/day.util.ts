import { CreatedAt } from "../../../entities/day/day.model";

export const getDayFromDate = (createdAt: CreatedAt) => {
	const date = new Date(createdAt);
	return date.getDate();
};

export function getDateRange(startDate: string, endDate: string): string[] {
	const dateArray: string[] = [];
	const currentDate = new Date(startDate);
	const lastDate = new Date(endDate);

	while (currentDate <= lastDate) {
		dateArray.push(currentDate.toISOString().split("T")[0]);
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return dateArray;
}

export const getUrlWithSelectedDay = (createdAt: CreatedAt): string => {
	return `/history?createdAt=${createdAt}`;
};

export const isSelectedDay = (createdAt: CreatedAt, selectedDate: CreatedAt): boolean => {
	return createdAt === selectedDate;
};
