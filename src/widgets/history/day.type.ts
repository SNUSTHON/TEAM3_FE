import { CreatedAt } from "../../entities/day/day.model";

export type IsSelected = boolean;
export type Count = 1 | 2 | 3 | 4 | 5;

export type TDay = {
	createdAt: CreatedAt;
	isSelected: IsSelected;
};
