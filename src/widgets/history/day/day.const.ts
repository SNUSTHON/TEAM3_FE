import { cva } from "class-variance-authority";
import { getDateRange } from "./day.util";

export const dayVariants = cva("text-md font-medium rounded-lg p-0", {
	variants: {
		count: {
			0: "bg-primary-white text-default-900",
			1: "bg-primary-50 text-default-900",
			2: "bg-primary-100 text-default-900",
			3: "bg-primary-200 text-default-900",
			4: "bg-primary-300 text-white",
			5: "bg-primary-500 text-white",
		},
		isSelected: {
			true: "bg-default-900 text-white",
			false: "",
		},
	},
});

export const startDate = "2024-08-05";
export const endDate = "2024-09-08";
export const dateList = getDateRange(startDate, endDate);
