import ChallengeList from "../../widgets/my/ChallengeList";
import ChallengeTitle from "../../widgets/my/ChallengeTitle";

const Challenge = () => {
	return (
		<div className="flex flex-col">
			<ChallengeTitle />
			<ChallengeList />
		</div>
	);
};

export default Challenge;
