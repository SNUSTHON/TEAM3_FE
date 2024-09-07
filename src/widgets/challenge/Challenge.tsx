import { Checkbox } from "@nextui-org/react";
import { ChallengeProps } from "../../entities/challenge/challenge.model";
import { usePostChangeChallenge } from "../../features/challenge/challengeList.hook";

const Challenge = ({ challengeName, level, duration, done, memberChallengesId }: ChallengeProps) => {
	const { mutate } = usePostChangeChallenge();

	const handleChange = (done: boolean) => {
		mutate({ challengeId: memberChallengesId, isDone: done });
	};

	return (
		<Checkbox
			isSelected={done}
			onValueChange={handleChange}
			className="w-full max-w-full bg-primary-50 p-4 rounded-2xl m-0"
			classNames={{
				label: "w-full",
				icon: "before:border-white",
			}}
		>
			<div className="flex w-full">
				<div className="flex flex-col w-full gap-1">
					<h3 className="text-default-900 text-sm font-bold">{challengeName}</h3>
					<h6 className="text-xs font-medium text-primary-500">Lv {level}</h6>
				</div>
				<h6 className="text-default-900 font-medium text-xs flex items-baseline gap-1">
					<span className="font-extrabold text-2xl">{duration}</span>min
				</h6>
			</div>
		</Checkbox>
	);
};

export default Challenge;
