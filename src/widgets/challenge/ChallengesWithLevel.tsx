import { ChallengeListByLevel } from "../../entities/challenge/challenge.model";
import Challenges from "./Challenges";
import Level from "./Level";

const ChallengesWithLevel = ({ level, challenges }: ChallengeListByLevel) => {
	return (
		<div className="flex flex-col gap-5">
			<Level level={level} />
			<Challenges challenges={challenges} />
		</div>
	);
};

export default ChallengesWithLevel;
