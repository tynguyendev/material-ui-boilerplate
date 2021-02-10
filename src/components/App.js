import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
