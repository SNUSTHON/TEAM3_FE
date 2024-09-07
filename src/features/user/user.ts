import { TUser } from "../../entities/user/user.model";
import { getAccessToken } from "../auth/accessToken";

type GetUserInformationResponse = {
	data: TUser;
};

export const getUserInformation = async (): Promise<GetUserInformationResponse> => {
	const url = "http://10.50.35.166:8080/api/members/my";
	const accessToken = getAccessToken();

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		method: "GET",
	});

	return response.json();
};
