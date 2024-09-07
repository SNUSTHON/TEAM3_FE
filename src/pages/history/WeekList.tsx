import Week from "./Week";
import { weeks } from "./week.constant";

const WeekList = () => {
	return (
		<div className="w-full flex">
			{weeks.map((week) => {
				return Week(week);
			})}
		</div>
	);
};

export default WeekList;
