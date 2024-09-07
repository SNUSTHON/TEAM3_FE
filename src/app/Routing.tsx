import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/Page";
import TodayPage from "../pages/today/Page";
import HistoryPage from "../pages/history/Page";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodayPage />} />
				<Route path="/today" element={<TodayPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/history" element={<HistoryPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
