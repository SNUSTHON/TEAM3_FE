import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import { mockPhrase } from "../../entities/phrase/phrase.mock";
import ChallengeList from "../../widgets/challenge/ChallengeList";
import Phrase from "./Phrase";

const TodayPage = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			toast("새로운 기록이 생겼어요!");
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<PageWithBottomNavigation>
			<div>
				<Phrase {...mockPhrase} />
				<ChallengeList />
			</div>
			<ToastContainer />
		</PageWithBottomNavigation>
	);
};

export default TodayPage;
