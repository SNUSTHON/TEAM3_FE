export type TLevel = number;
export type TCategoryName = string;

export type MemberChallengesId = number;
export type ChallengeName = string;
export type CategoryName =
	| "집안일"
	| "운동"
	| "학습"
	| "정신건강"
	| "감사"
	| "생활습관"
	| "사소한 목표"
	| "디지털 디톡스";
export type Duration = number;
export type IsDone = boolean;

export type ChallengeProps = {
	memberChallengesId: MemberChallengesId;
	challengeName: ChallengeName;
	level: TLevel;
	duration: Duration;
	done: IsDone;
};

export type TChallenges = ChallengeProps[];

export type ChallengeListByLevel = {
	categoryName: TCategoryName;
	challenges: TChallenges;
};

export type TChallengeList = {
	data: ChallengeListByLevel[];
};
