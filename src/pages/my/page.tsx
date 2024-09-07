import Header from "./Header";
import { mockUser } from "../../entities/user/user.mock";
import User from "./User";
import Sponser from "./Sponser";
import Challenge from "./Challenge";

const MyPage = () => {
	return (
		<div>
			<Header />
			<User {...mockUser} />
			{Sponser(mockUser.sponsorProgress)}
			<Challenge />
		</div>
	);
};

export default MyPage;
