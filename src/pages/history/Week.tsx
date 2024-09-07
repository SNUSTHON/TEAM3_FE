import { TWeek } from "./week.constant";

const Week = (week: TWeek) => {
	return (
		<div className="w-full aspect-square text-default-400 font-semibold mt-3 text-xs text-center">
			{week}
		</div>
	);
};

export default Week;
