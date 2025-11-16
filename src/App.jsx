import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Navpic from "./components/Navpic";
import Cards from "./components/Crards";
import Had from "./components/had";
import FeaturesGrid from "./components/FeaturesGrid";
import MarAbout from "./components/MarAbout";
import StatsSection from "./components/StatsSection";
import UpcomingEvents from "./components/UpcomingEvents";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AffiliateSubscribe from "./components/AffiliateSubscribe";
import Footer from "./components/Footer";

import Alert from "./components/Alert";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Alert />
          <Navpic />
          <Had />
          <Cards />
          <FeaturesGrid />
          <MarAbout />
          <StatsSection />
          <UpcomingEvents />
          <AffiliateSubscribe />
          <Footer />
        </div>
      ),
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
