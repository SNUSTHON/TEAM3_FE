import { TCategoryName } from "../../entities/challenge/challenge.model";

type LevelProps = {
	categoryName: TCategoryName;
};

const Level = ({ categoryName }: LevelProps) => {
	return <h2 className="text-default-900 font-bold text-2xl">{categoryName}</h2>;
};

export default Level;
