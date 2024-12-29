import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryPlayground from "./components/ReactQueryPlayground";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ReactQueryPlayground />
    </QueryClientProvider>
  );
}

export default App;
