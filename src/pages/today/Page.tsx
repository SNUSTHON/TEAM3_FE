import { mockChallenge } from "../../entities/challenge/challenge.mock";
import { mockPhrase } from "../../entities/phrase/phrase.mock";
import ChallengeList from "../../widgets/challenge/ChallengeList";
import Phrase from "./Phrase";

const TodayPage = () => {
	return (
		<div>
			<Phrase {...mockPhrase} />
			<ChallengeList {...mockChallenge} />
		</div>
	);
};

export default TodayPage;
