import Header from "./Header";
import { mockUser } from "../../entities/user/user.mock";
import User from "./User";

const MyPage = () => {
	return (
		<div>
			<Header />
			<User {...mockUser} />
		</div>
	);
};

export default MyPage;
