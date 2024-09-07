import { useGetChallengeList } from "../../features/challenge/challengeList.hook";
import ChallengesWithLevel from "./ChallengesWithLevel";

const ChallengeList = () => {
	const { data: challengeList, isLoading: isLoadingGetChallengeList } = useGetChallengeList();
	if (isLoadingGetChallengeList) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col gap-5">
			{challengeList &&
				challengeList.map(({ categoryName, challenges }) => {
					return (
						<ChallengesWithLevel
							key={categoryName}
							categoryName={categoryName}
							challenges={challenges}
						/>
					);
				})}
		</div>
	);
};

export default ChallengeList;
