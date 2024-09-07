import { TChallengeList } from "./challenge.model";

export const mockChallenge: TChallengeList = {
	data: [
		{
			categoryName: "집안일",
			challenges: [
				{
					memberChallengesId: 1,
					challengeName: "설거지하기",
					level: 1,
					duration: 10,
					isDone: false,
				},
				{
					memberChallengesId: 2,
					challengeName: "창문열고 환기시키기",
					level: 1,
					duration: 3,
					isDone: false,
				},
			],
		},
		{
			categoryName: "운동",
			challenges: [
				{
					memberChallengesId: 3,
					challengeName: "팔굽혀펴기 30개",
					level: 3,
					duration: 20,
					isDone: false,
				},
				{
					memberChallengesId: 4,
					challengeName: "플랭크 30초",
					level: 3,
					duration: 30,
					isDone: false,
				},
			],
		},
		{
			categoryName: "학습",
			challenges: [
				{
					memberChallengesId: 5,
					challengeName: "책 10 페이지 읽기",
					level: 2,
					duration: 20,
					isDone: false,
				},
				{
					memberChallengesId: 6,
					challengeName: "학습 동영상 5분 시청",
					level: 2,
					duration: 5,
					isDone: false,
				},
			],
		},
	],
};
