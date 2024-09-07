import { useQuery } from "@tanstack/react-query";
import { getChallengeList } from "./challengeList";

export const useGetChallengeList = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["challengeList"],
		queryFn: () => getChallengeList(),
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};
