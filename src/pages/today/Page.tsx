import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import { mockPhrase } from "../../entities/phrase/phrase.mock";
import ChallengeList from "../../widgets/challenge/ChallengeList";
import Phrase from "./Phrase";

const TodayPage = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			toast("새로운 기록이 생겼어요!", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				className: "bg-primary-500 text-white",
			});
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<PageWithBottomNavigation>
			<div>
				<Phrase {...mockPhrase} />
				<ChallengeList />
			</div>
			<ToastContainer className="custom-toast-container" limit={1} />
		</PageWithBottomNavigation>
	);
};

export default TodayPage;
