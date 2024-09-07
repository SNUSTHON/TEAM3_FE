import { TCard } from "../../../entities/card/card.model";
import { getCategoryIcon, getDurationComponent, getStatusIconComponent } from "./card.util";
import CardInfoElement from "./CardInfoElement";
import Divider from "./Divider";

type CardInfoProps = Pick<TCard, "categoryName" | "duration" | "isDone">;

const CardInfo = ({ categoryName, duration, isDone }: CardInfoProps) => {
	return (
		<div className="flex justify-between">
			<CardInfoElement>{getCategoryIcon(categoryName)}</CardInfoElement>
			<Divider />
			<CardInfoElement>{getDurationComponent(duration)}</CardInfoElement>
			<Divider />
			<CardInfoElement>{getStatusIconComponent(isDone)}</CardInfoElement>
		</div>
	);
};

export default CardInfo;
