import CardList from "../../widgets/history/card/CardList";
import DayList from "../../widgets/history/day/DayList";
import HeatMap from "./HeatMap";
import WeekList from "./WeekList";

const HistoryPage = () => {
	return (
		<div className="flex flex-col">
			<HeatMap />
			<WeekList />
			<DayList />
			<CardList />
		</div>
	);
};

export default HistoryPage;
