import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./app/Routing";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Routing />
		</QueryClientProvider>
	);
}

export default App;
