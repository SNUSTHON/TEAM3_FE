import HeatMap from "./HeatMap";
import WeekList from "./WeekList";

const HistoryPage = () => {
	return (
		<div className="flex flex-col">
			<HeatMap />
			<WeekList />
		</div>
	);
};

export default HistoryPage;
