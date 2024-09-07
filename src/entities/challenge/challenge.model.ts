export type TLevel = number;

export type MemberChallengesId = number;
export type ChallengeName = string;
export type CategoryName = string;
export type Duration = number;
export type IsDone = boolean;

export type ChallengeProps = {
	memberChallengesId: MemberChallengesId;
	challengeName: ChallengeName;
	categoryName: CategoryName;
	duration: Duration;
	isDone: IsDone;
};

export type TChallenges = ChallengeProps[];

export type ChallengeListByLevel = {
	level: TLevel;
	challenges: TChallenges;
};

export type TChallengeList = {
	data: ChallengeListByLevel[];
};
