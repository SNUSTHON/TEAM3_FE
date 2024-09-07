import { useQuery } from "@tanstack/react-query";
import { getUserCategoryList, getUserInformation } from "./user";

export const useGetUserInformation = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["userInformation"],
		queryFn: getUserInformation,
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};

export const useGetUserCategoryList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["userCategoryList"],
		queryFn: getUserCategoryList,
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};
