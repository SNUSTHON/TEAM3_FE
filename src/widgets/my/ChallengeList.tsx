import { mockChallengeSetting } from "../../entities/user/challenge.mock";
import Challenge from "./Challenge";

const ChallengeList = () => {
	return (
		<div className="flex flex-col gap-2">
			{mockChallengeSetting.map((challenge) => {
				return <Challenge key={challenge.categoryId} {...challenge} />;
			})}
		</div>
	);
};

export default ChallengeList;
