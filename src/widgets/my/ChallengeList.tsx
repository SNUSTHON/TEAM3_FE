import { useGetUserCategoryList } from "../../features/user/user.hook";
import Challenge from "./Challenge";

const ChallengeList = () => {
	const { data: challengeSettingList, isLoading } = useGetUserCategoryList();
	if (isLoading) {
		return <div>Loading</div>;
	}

	if (!challengeSettingList) {
		return <div>Not Found</div>;
	}

	return (
		<div className="flex flex-col gap-2">
			{challengeSettingList.map((challenge) => {
				return <Challenge key={challenge.categoryId} {...challenge} />;
			})}
		</div>
	);
};

export default ChallengeList;
