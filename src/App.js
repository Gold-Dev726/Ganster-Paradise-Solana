import Router from "./router";
import ThemeConfig from "theme";
import ThemeLocalization from "components/ThemeLocalization";

export default function App() {
  // switchNetwork();

  return (
    <ThemeConfig>
      <ThemeLocalization>
        <Router />
      </ThemeLocalization>
    </ThemeConfig>
  );
}
