import { Duration, TCategoryName, TLevel } from "../../../entities/challenge/challenge.model";
import doneIcone from "../../../assets/done.svg";
import undoneIcon from "../../../assets/undone.svg";
import { categoryIconMapping } from "./card.constant";

export const getLevelString = (level: TLevel): string => {
	return `Lv ${level}`;
};
export const getDurationComponent = (duration: Duration) => {
	return (
		<h6 className="text-default-500 font-bold">
			<span className="text-4xl">{duration}</span> m
		</h6>
	);
};
export const getStatusIconComponent = (isDone: boolean) => {
	return <img src={isDone ? doneIcone : undoneIcon} alt="status icon" width={40} height={40} />;
};
export const getCategoryIcon = (categoryName: TCategoryName) => {
	return <img src={categoryIconMapping[categoryName]} alt="category icon" width={40} height={40} />;
};
