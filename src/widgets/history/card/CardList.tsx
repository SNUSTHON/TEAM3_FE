import { mockCards } from "../../../entities/card/card.mock";
import Card from "./Card";

const CardList = () => {
	return (
		<div className="flex flex-col gap-3 my-10">
			{mockCards.map((card) => {
				return <Card key={card.challengeName} {...card} />;
			})}
		</div>
	);
};

export default CardList;
