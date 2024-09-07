import { ChallengeListByLevel } from "../../entities/challenge/challenge.model";
import Challenges from "./Challenges";
import Level from "./Level";

const ChallengesWithLevel = ({ categoryName, challenges }: ChallengeListByLevel) => {
	return (
		<div className="flex flex-col gap-5">
			<Level categoryName={categoryName} />
			<Challenges challenges={challenges} />
		</div>
	);
};

export default ChallengesWithLevel;
