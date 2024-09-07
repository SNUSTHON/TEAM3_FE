import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import { mockChallenge } from "../../entities/challenge/challenge.mock";
import { mockPhrase } from "../../entities/phrase/phrase.mock";
import ChallengeList from "../../widgets/challenge/ChallengeList";
import Phrase from "./Phrase";

const TodayPage = () => {
	return (
		<PageWithBottomNavigation>
			<div>
				<Phrase {...mockPhrase} />
				<ChallengeList {...mockChallenge} />
			</div>
		</PageWithBottomNavigation>
	);
};

export default TodayPage;
