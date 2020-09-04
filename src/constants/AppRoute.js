import Home from "../components/Pages/LandingPage";
import About from "../components/Pages/AboutPage";
import Menu from "../components/Pages/Menu";
import Review from "../components/Pages/Review";
import ContactUs from "../components/Pages/ContactUs";

const HOME = "/";
const CONTACTUS = "/contactUs";
const ABOUT = "/aboutPage";
const MENU = "/menu";
const REVIEW = "/review";

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
  {
    link: REVIEW,
    text: "Review",
    component: Review,
  },
];

export default PATHS;
