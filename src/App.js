import GlobalStyle from "./globalStyles";
import {lightTheme} from "./components/Themes"
import {ThemeProvider} from "styled-components"
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main"
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";

function App() {
  return <>

    <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
    </ThemeProvider>

  </>
}

export default App

