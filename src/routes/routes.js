import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
// import LoginPage from "../components/Auth/LoginPage";
import LogoutPage from "../components/Auth/LogoutPage";
import Homepage from "../components/Homepage/Homepage";
import NotFoundPage from "../components/404NotFoundPage";
import Login1 from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import "../App.css";
import Gallery from "../components/Gallery";
import ListProperty from "../components/ListProperty";
import SideBar from "../components/Sidebar/SideBar";
import PrivacyPolicy from "../components/Privacy/PrivacyPolicy";
import TermsOfUse from "../components/Privacy/Terms";
import Navbar from "../components/Navbar";
import UserDetails from "../components/Dashboard/UserDetails";
import Footer from "../components/footer";
import WishList from "../components/Dashboard/WishList";
import AllMessages from "../components/Dashboard/AllMessages";
import PropertyDetails from "../components/PropertyDetails";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import InDetails from "../components/Homepage/InDetails";
import ListFeatured from "../components/ListFeatured";
import Career from "../components/Careers";

const Routes = (props) => {
  const { token } = useAuth();

  // Define public routes accessible to all users

  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/indetails",
      element: (
        <div>
          <InDetails />
        </div>
      ),
    },
    {
      path: "/about-us",
      element: (
        <div>
          <AboutUs />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <ContactUs />
          <Footer />
        </div>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <div>
          <PrivacyPolicy />
        </div>
      ),
    },
    {
      path: "/terms-and-conditions",
      element: (
        <div>
          <TermsOfUse />
        </div>
      ),
    },
    {
      path: "/careers",
      element: (
        <div>
          <Career />
        </div>
      ),
    },

    {
      path: "*",
      element: (
        <div>
          <NotFoundPage />
        </div>
      ),
    },
  ];

  // Define routes accessible only to authenticated users

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: (
            <div>
              <Homepage />
            </div>
          ),
        },

        {
          path: "/user",
          element: <div>user home page</div>,
        },

        {
          path: "/user/my-account",
          element: (
            <div>
              <Navbar />
              <SideBar>
                <UserDetails />
              </SideBar>
              <div className="block lg:hidden">
                <UserDetails />
              </div>

              <Footer />
            </div>
          ),
        },

        {
          path: "/user/wish-list",
          element: (
            <div>
              <Navbar />
              <SideBar>
                <WishList />
              </SideBar>
              <div className="block lg:hidden">
                <WishList />
              </div>

              <Footer />
            </div>
          ),
        },

        {
          path: "/user/chat",
          element: (
            <div>
              <Navbar />

              <SideBar>
                <AllMessages />
              </SideBar>
              <div className="block lg:hidden">
                <AllMessages />
              </div>

              <Footer />
            </div>
          ),
        },

        // {
        //   path: "/user/notification",
        //   element: (
        //     <div>
        //       <div className="sticky top-0 bg-white w-full z-50">
        //         <Navbar />
        //       </div>
        //       <SideBar>
        //         <WishList />
        //       </SideBar>
        //       <Footer />
        //     </div>
        //   ),
        // },
        {
          path: "/properties",
          element: (
            <div>
              <ListProperty />
            </div>
          ),
        },
        {
          path: "/featured",
          element: (
            <div>
              <ListFeatured />
            </div>
          ),
        },

        {
          path: "/property/:slug",
          element: (
            <div
              style={
                {
                  // overflowX: "hidden",
                  // width: "100%",
                }
              }
            >
              <PropertyDetails />

              <Footer />
            </div>
          ),
        },
        {
          path: "/gallery",
          element: (
            <div>
              
              <Gallery />
            </div>
          ),
        },

        {
          path: "/logout",
          element: <LogoutPage />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <div>
          <Homepage />
        </div>
      ),
    },

    {
      path: "/properties",
      element: (
        <div>
          <ListProperty />
        </div>
      ),
    },
    {
      path: "/featured",
      element: (
        <div>
          <ListFeatured />
        </div>
      ),
    },
    {
      path: "/property/:slug",
      element: (
        <div>
          <PropertyDetails />

          <Footer />
        </div>
      ),
    },
    {
      path: "/gallery",
      element: (
        <div>
          <Gallery />
        </div>
      ),
    },
    {
      path: "/login",
      element: <Login1 />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
