import Day from "./Day";
import { dateList } from "./day.const";

const DayList = () => {
	return (
		<div className="grid grid-cols-7 w-full gap-1">
			{dateList.map((date) => (
				<Day key={date} createdAt={date} isSelected={false} />
			))}
		</div>
	);
};

export default DayList;
