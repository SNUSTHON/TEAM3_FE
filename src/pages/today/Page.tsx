import { mockPhrase } from "../../entities/phrase/phrase.mock";
import Phrase from "./Phrase";

const TodayPage = () => {
	return (
		<div>
			<Phrase {...mockPhrase} />
		</div>
	);
};

export default TodayPage;
