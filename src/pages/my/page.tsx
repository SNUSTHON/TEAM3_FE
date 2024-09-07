import Header from "./Header";
import { mockUser } from "../../entities/user/user.mock";
import User from "./User";
import Sponser from "./Sponser";
import Challenge from "./Challenge";
import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";

const MyPage = () => {
	return (
		<PageWithBottomNavigation>
			<div>
				<Header />
				<User {...mockUser} />
				{Sponser(mockUser.sponsorProgress)}
				<Challenge />
			</div>
		</PageWithBottomNavigation>
	);
};

export default MyPage;
