import { TCard } from "../../../entities/card/card.model";
import CardInfoElement from "./CardInfoElement";

type CardInfoProps = Pick<TCard, "categoryName" | "duration" | "status">;

const CardInfo = ({ categoryName, duration, status }: CardInfoProps) => {
	return (
		<div className="flex justify-between">
			<CardInfoElement label="Category" value={categoryName} />
			<CardInfoElement label="Duration" value={duration.toString()} />
			<CardInfoElement label="Status" value={status.toString()} />
		</div>
	);
};

export default CardInfo;
