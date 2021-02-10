import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
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
          <Route
            exact
            path="/about"
            render={props => (
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
