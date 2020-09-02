import Home from "../components/Pages/LandingPage";
import About from "../components/Pages/AboutPage";
import Menu from "../components/Pages/Menu";
import ContactUs from "../components/Pages/ContactUs";

const HOME = "/";
const CONTACTUS = "/contactUs";
const ABOUT = "/aboutPage";
const MENU = "/menu";

const PATHS = [
  {
    exact: true,
    link: HOME,
    text: "Home",
    component: Home,
  },
  {
    link: MENU,
    text: "Menu",
    component: Menu,
  },
  {
    link: ABOUT,
    text: "About",
    component: About,
  },
  {
    link: ContactUs,
    text: "ContactUs",
    component: ContactUs,
  },
];

export default PATHS;
