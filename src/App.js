import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "route/route";
import GlobalStyles from "style/global.style";
import theme from "style/theme.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
