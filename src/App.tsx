import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./app/Routing";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Routing />
		</QueryClientProvider>
	);
}

export default App;
