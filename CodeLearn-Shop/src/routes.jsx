import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category/:categoryName", element: <Category /> },
  { path: "/article/:articleName", element: <Article /> },
];

export default routes;
