import { Button } from "@nextui-org/button";
import { useGetCount } from "./day.hook";
import { Count, TDay } from "./day.type";
import { getDayFromDate } from "./day.util";
import { dayVariants } from "./day.const";

const Day = ({ createdAt, isSelected }: TDay) => {
	const count: Count = useGetCount(createdAt);
	const day = getDayFromDate(createdAt);

	return (
		<Button className={dayVariants({ count, isSelected })} isIconOnly>
			{day}
		</Button>
	);
};

export default Day;
