import DayList from "../../widgets/history/DayList";
import HeatMap from "./HeatMap";
import WeekList from "./WeekList";

const HistoryPage = () => {
	return (
		<div className="flex flex-col">
			<HeatMap />
			<WeekList />
			<DayList />
		</div>
	);
};

export default HistoryPage;
