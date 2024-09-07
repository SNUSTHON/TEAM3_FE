import { TLevel } from "../../entities/challenge/challenge.model";

type LevelProps = {
	level: TLevel;
};

const Level = ({ level }: LevelProps) => {
	return (
		<h2>
			Lv. <span>{level}</span>
		</h2>
	);
};

export default Level;
