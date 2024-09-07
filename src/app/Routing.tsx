import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/Page";
import TodayPage from "../pages/today/Page";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodayPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
