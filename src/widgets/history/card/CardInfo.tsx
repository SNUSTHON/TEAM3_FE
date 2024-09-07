import { TCard } from "../../../entities/card/card.model";
import CardInfoElement from "./CardInfoElement";

type CardInfoProps = Pick<TCard, "categoryName" | "duration" | "isDone">;

const CardInfo = ({ categoryName, duration, isDone }: CardInfoProps) => {
	return (
		<div className="flex justify-between">
			<CardInfoElement label="Category" value={categoryName} />
			<CardInfoElement label="Duration" value={duration.toString()} />
			<CardInfoElement label="Status" value={isDone.toString()} />
		</div>
	);
};

export default CardInfo;
