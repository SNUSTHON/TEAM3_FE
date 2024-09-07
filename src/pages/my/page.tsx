import Header from "./Header";
import Challenge from "./Challenge";
import PageWithBottomNavigation from "../../common/components/PageWithBottomNavigation";
import UserInfo from "./UserInfo";

const MyPage = () => {
	return (
		<PageWithBottomNavigation>
			<div>
				<Header />
				<UserInfo />
				<Challenge />
			</div>
		</PageWithBottomNavigation>
	);
};

export default MyPage;
