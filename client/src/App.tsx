import { Switch, Route, Router } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/home";
import HowItWorks from "@/pages/how-it-works";
import About from "@/pages/about";
import ForSensitiveSkin from "@/pages/for-sensitive-skin";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import NotFound from "@/pages/not-found";

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/about" component={About} />
      <Route path="/for-sensitive-skin" component={ForSensitiveSkin} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router base={routerBase}>
        <Routes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
