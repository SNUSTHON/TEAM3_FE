import Day from "./Day";
import { dateList } from "./day.const";
import { isSelectedDay } from "./day.util";
import { useGetSelectedDate } from "./day.hook";

const DayList = () => {
	const selectedDay = useGetSelectedDate();

	return (
		<div className="grid grid-cols-7 w-full gap-1">
			{dateList.map((date) => (
				<Day key={date} createdAt={date} isSelected={isSelectedDay(date, selectedDay)} />
			))}
		</div>
	);
};

export default DayList;
