import { TChallengeList } from "../../entities/challenge/challenge.model";
import { getAccessToken } from "../auth/accessToken";

export const getChallengeList = async (): Promise<TChallengeList> => {
	const url = "http://10.50.35.166:8080/api/challenges/today";

	const accessToken = getAccessToken();

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		method: "GET",
	});

	return response.json();
};
