import { CategoryName } from "../challenge/challenge.model";

export type CategoryId = number;
export type IsSelected = boolean;

export type TChallengeSetting = {
	categoryId: CategoryId;
	categoryName: CategoryName;
	isSelected: IsSelected;
};

export type TChallengeSettingList = TChallengeSetting[];
