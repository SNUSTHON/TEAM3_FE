import { useQuery } from "@tanstack/react-query";
import { getUserInformation } from "./user";

export const useGetUserInformation = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["userInformation"],
		queryFn: getUserInformation,
		retry: 0,
		select: (data) => data.data,
	});

	return { data, isLoading };
};
