import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import { mockPhrase } from "../../entities/phrase/phrase.mock";
import ChallengeList from "../../widgets/challenge/ChallengeList";
import Phrase from "./Phrase";

const TodayPage = () => {
	return (
		<PageWithBottomNavigation>
			<div>
				<Phrase {...mockPhrase} />
				<ChallengeList />
			</div>
		</PageWithBottomNavigation>
	);
};

export default TodayPage;
