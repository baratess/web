import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Help from "./Pages/Help";
import RootLayout from "./Layouts/RootLayout";
import Faq from "./Pages/Help/Faq";
import Contact, { contactAction } from "./Pages/Help/Contact";
import File404 from "./Pages/File404";
import CareerLayout from "./Layouts/CareerLayout";
import Careers, { careersLoader } from "./Pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./Pages/CareerDetails";
import CareersError from "./Pages/Careers.Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareerLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<File404 />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
