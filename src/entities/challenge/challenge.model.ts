export type TLevel = number;
export type TCategoryName = string;

export type MemberChallengesId = number;
export type ChallengeName = string;
export type CategoryName = string;
export type Duration = number;
export type IsDone = boolean;

export type ChallengeProps = {
	memberChallengesId: MemberChallengesId;
	challengeName: ChallengeName;
	level: TLevel;
	duration: Duration;
	isDone: IsDone;
};

export type TChallenges = ChallengeProps[];

export type ChallengeListByLevel = {
	categoryName: TCategoryName;
	challenges: TChallenges;
};

export type TChallengeList = {
	data: ChallengeListByLevel[];
};
