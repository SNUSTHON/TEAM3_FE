import { DayHistoryListResponse } from "../../entities/day/day.model";
import { getAccessToken } from "../auth/accessToken";

export type GetMonthHistoryRequest = {
	startDate: string;
	endDate: string;
};

export const getMonthHistory = async ({
	startDate,
	endDate,
}: GetMonthHistoryRequest): Promise<DayHistoryListResponse> => {
	const url = `http://10.50.35.166:8080/api/challenges/range?startDate=${startDate}&endDate=${endDate}`;
	const accessToken = getAccessToken();

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		method: "GET",
	});

	return response.json();
};
