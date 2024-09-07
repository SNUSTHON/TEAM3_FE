import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getChallengeList, postChangeChallenge } from "./challengeList";

export const useGetChallengeList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["challengeList"],
		queryFn: () => getChallengeList(),
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};

export const usePostChangeChallenge = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: postChangeChallenge,
		retry: 0,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["challengeList"] });
		},
		onError: () => {
			queryClient.invalidateQueries({ queryKey: ["challengeList"] });
		},
	});
};
