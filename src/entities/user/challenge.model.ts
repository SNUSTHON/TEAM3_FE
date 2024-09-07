import { CategoryName } from "../challenge/challenge.model";

export type CategoryId = number;
export type IsSelected = boolean;

export type TChallengeSetting = {
	categoryId: CategoryId;
	categoryName: CategoryName;
	selected: IsSelected;
};

export type TChallengeSettingList = TChallengeSetting[];
