import { TLevel } from "../../entities/challenge/challenge.model";

type LevelProps = {
	level: TLevel;
};

const Level = ({ level }: LevelProps) => {
	return (
		<h2 className="text-default-900 font-bold text-xs">
			Lv. <span className="text-2xl">{level}</span>
		</h2>
	);
};

export default Level;
