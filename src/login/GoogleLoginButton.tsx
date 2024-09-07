import { Button } from "@nextui-org/react";
import googleLogo from "../assets/google.svg";

const GoogleLoginButton = () => {
	return (
		<Button>
			<img src={googleLogo} alt="Google Logo" />
			구글로 시작하기
		</Button>
	);
};

export default GoogleLoginButton;
