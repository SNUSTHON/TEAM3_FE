import { useSearchParams } from "react-router-dom";
import Day from "./Day";
import { dateList } from "./day.const";
import { isSelectedDay } from "./day.util";

const DayList = () => {
	const [searchParam] = useSearchParams();
	const selectedDay = searchParam.get("createdAt") ?? "2024-09-08";

	return (
		<div className="grid grid-cols-7 w-full gap-1">
			{dateList.map((date) => (
				<Day key={date} createdAt={date} isSelected={isSelectedDay(date, selectedDay)} />
			))}
		</div>
	);
};

export default DayList;
