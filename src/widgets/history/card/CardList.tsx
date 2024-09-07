import { useGetDailyHistory } from "../../../features/history/history.hook";
import { useGetSelectedDate } from "../day/day.hook";
import Card from "./Card";

const CardList = () => {
	const selectedDate = useGetSelectedDate();
	const { data: cards, isLoading } = useGetDailyHistory(selectedDate);
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col gap-3 my-10">
			{cards?.map((card) => {
				return <Card key={card.challengeName} {...card} />;
			})}
		</div>
	);
};

export default CardList;
