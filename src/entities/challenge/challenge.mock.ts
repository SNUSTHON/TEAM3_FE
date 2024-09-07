import { TChallengeList } from "./challenge.model";

export const mockChallenge: TChallengeList = {
	data: [
		{
			level: 1,
			challenges: [
				{
					memberChallengesId: 1,
					challengeName: "설거지하기",
					categoryName: "집안일",
					duration: 10,
					isDone: false,
				},
				{
					memberChallengesId: 2,
					challengeName: "창문열고 환기시키기",
					categoryName: "집안일",
					duration: 3,
					isDone: false,
				},
			],
		},
		{
			level: 2,
			challenges: [
				{
					memberChallengesId: 3,
					challengeName: "팔굽혀펴기 30개",
					categoryName: "건강과 삶",
					duration: 20,
					isDone: false,
				},
				{
					memberChallengesId: 4,
					challengeName: "서비스디자인 과제 끝내기",
					categoryName: "과제",
					duration: 60,
					isDone: false,
				},
			],
		},
		{
			level: 3,
			challenges: [
				{
					memberChallengesId: 5,
					challengeName: "오늘의 도전(아침)",
					categoryName: "도전 진행 상황",
					duration: 40,
					isDone: false,
				},
				{
					memberChallengesId: 6,
					challengeName: "서비스디자인 과제 끝내기",
					categoryName: "과제",
					duration: 60,
					isDone: false,
				},
			],
		},
	],
};
