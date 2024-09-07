import { TCard } from "../../../entities/card/card.model";
import { getLevelString } from "./card.util";
import CardInfo from "./CardInfo";

const Card = ({ challengeName, level, categoryName, duration, isDone }: TCard) => {
	return (
		<div className="flex flex-col gap-6 border rounded-2xl border-default p-4">
			<h6 className="font-bold text-xs">{getLevelString(level)}</h6>
			<h3 className="font-bold text-2xl">{challengeName}</h3>
			<div className="w-full h-[2px] bg-default" />
			<CardInfo categoryName={categoryName} duration={duration} isDone={isDone} />
		</div>
	);
};

export default Card;
