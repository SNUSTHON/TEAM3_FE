import { CategoryId, TChallengeSettingList } from "../../entities/user/challenge.model";
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

type GetUSerCategoryList = {
	data: TChallengeSettingList;
};

export const getUserCategoryList = async (): Promise<GetUSerCategoryList> => {
	const url = "http://10.50.35.166:8080/api/categories/my";
	const accessToken = getAccessToken();

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		method: "GET",
	});

	return response.json();
};

export type PostUserCategoryListRequest = {
	categoryIds: CategoryId[];
};

export const postUserCategoryList = async ({ categoryIds }: PostUserCategoryListRequest) => {
	const url = "http://10.50.35.166:8080/api/categories/my";
	const accessToken = getAccessToken();

	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({ categoryIds }),
		method: "POST",
	});

	return response.json();
};
