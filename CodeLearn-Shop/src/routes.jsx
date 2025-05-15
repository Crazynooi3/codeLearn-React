import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category/:categoryName", element: <Category /> },
  { path: "/article/:articleName", element: <Article /> },
  { path: "/courses/:coursesName", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];

export default routes;
