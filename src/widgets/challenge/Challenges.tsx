import { TChallenges } from "../../entities/challenge/challenge.model";
import Challenge from "./Challenge";

type ChallengesProps = {
	challenges: TChallenges;
};

const Challenges = ({ challenges }: ChallengesProps) => {
	return (
		<div className="flex flex-col gap-10">
			{challenges.map((challenge) => (
				<Challenge key={challenge.memberChallengesId} {...challenge} />
			))}
		</div>
	);
};

export default Challenges;
