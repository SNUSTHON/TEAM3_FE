import { CategoryName, ChallengeName, Duration, TLevel } from "../challenge/challenge.model";

export type Status = boolean;

export type TCard = {
	challengeName: ChallengeName;
	level: TLevel;
	categoryName: CategoryName;
	duration: Duration;
	status: Status;
};

export type TCardList = TCard[];
