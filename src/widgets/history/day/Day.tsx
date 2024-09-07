import { Button } from "@nextui-org/button";
import { useGetCount } from "./day.hook";
import { Count, TDay } from "./day.type";
import { getDayFromDate, getUrlWithSelectedDay } from "./day.util";
import { dayVariants } from "./day.const";
import { Link } from "react-router-dom";

const Day = ({ createdAt, isSelected }: TDay) => {
	const count: Count = useGetCount(createdAt);
	const day = getDayFromDate(createdAt);

	return (
		<Button className={dayVariants({ count, isSelected })} isIconOnly>
			<Link to={getUrlWithSelectedDay(createdAt)}>{day}</Link>
		</Button>
	);
};

export default Day;
