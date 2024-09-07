import { Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { ChallengeProps } from "../../entities/challenge/challenge.model";

const Challenge = ({ challengeName, categoryName, duration, isDone }: ChallengeProps) => {
	const [isSelected, setIsSelected] = useState(isDone);

	return (
		<Checkbox isSelected={isSelected} onValueChange={setIsSelected} className="flex">
			<div className="flex flex-col">
				<h3 className="text-default-900">{challengeName}</h3>
				<h6>{categoryName}</h6>
			</div>
			<h6>{duration} min</h6>
		</Checkbox>
	);
};

export default Challenge;
