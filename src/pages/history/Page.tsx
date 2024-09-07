import { toast, ToastContainer } from "react-toastify";
import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import CardList from "../../widgets/history/card/CardList";
import DayList from "../../widgets/history/day/DayList";
import HeatMap from "./HeatMap";
import WeekList from "./WeekList";
import { useEffect } from "react";

const HistoryPage = () => {
	return (
		<PageWithBottomNavigation>
			<div className="flex flex-col">
				<HeatMap />
				<WeekList />
				<DayList />
				<CardList />
			</div>
		</PageWithBottomNavigation>
	);
};

export default HistoryPage;
