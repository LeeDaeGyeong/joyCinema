import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "route/route";
import GlobalStyles from "style/global.style";
import theme from "style/theme.style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
