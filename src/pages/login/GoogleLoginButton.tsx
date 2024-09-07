import { Button } from "@nextui-org/react";
import { setAccessToken } from "../../features/auth/accessToken";
import { Link } from "react-router-dom";

const GoogleLoginButton = () => {
	const login = () => {
		setAccessToken(
			"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJ1aGFuMTAxNkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1hcnVoeG4gS28iLCJwcm92aWRlciI6IkdPT0dMRSIsInJvbGUiOiJST0xFX0FETUlOIiwiaWF0IjoxNzI1NzQxMDY2LCJleHAiOjE3MjU4Mjc0NjZ9.ApeW6PF-H9IGOLHUtCle12MgQJpqV0YVz5yal9c4u7w"
		);
	};

	return (
		<div>
			<Link to="/">
				<Button
					onClick={login}
					className="w-full bg-primary-500 text-white fixed bottom-[20px] left-0"
				>
					로그인
				</Button>
			</Link>
		</div>
	);
};

export default GoogleLoginButton;
