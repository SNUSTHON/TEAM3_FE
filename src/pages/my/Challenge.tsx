import ChallengeList from "../../widgets/my/ChallengeList";
import ChallengeTitle from "../../widgets/my/ChallengeTitle";
import ChangeCategoryButton from "../../widgets/my/ChangeCategoryButton";

const Challenge = () => {
	return (
		<div className="flex flex-col">
			<ChallengeTitle />
			<ChallengeList />
			<ChangeCategoryButton />
		</div>
	);
};

export default Challenge;
