import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserCategoryList, getUserInformation, postUserCategoryList } from "./user";

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

export const usePostUserCategoryList = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postUserCategoryList,
		retry: 0,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["userCategoryList"] });
		},
	});
};
