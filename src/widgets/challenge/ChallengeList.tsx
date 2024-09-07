import { TChallengeList } from "../../entities/challenge/challenge.model";
import ChallengesWithLevel from "./ChallengesWithLevel";

const ChallengeList = ({ data }: TChallengeList) => {
	return (
		<div className="flex flex-col gap-5">
			{data.map(({ level, challenges }) => {
				return <ChallengesWithLevel key={level} level={level} challenges={challenges} />;
			})}
		</div>
	);
};

export default ChallengeList;
