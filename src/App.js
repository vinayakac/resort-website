import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  useParams,
} from "react-router-dom";


import Header from "./components/Header"

import HomePageBanner from "./components/HomePageBanner"

import HomePageCalender from "./components/HomePageCalender"

import HomePageAbout from "./components/HomePageAbout"

import HomePageAmenities from "./components/HomePageAmenities"

import HomePageRooms from "./components/HomePageRooms"

import HomePageDinning from "./components/HomePageDinning"

import HomePageTestimonials from "./components/HomePageTestimonials"

import Footer from "./components/Footer"

import AboutUsPage from "./components/AboutUsPage"

function Home() {
  return (
    <div className="App" style={{overflow:"hidden"}}>

      <Header/>

      <HomePageBanner/>

      <HomePageCalender/>

      <HomePageAbout/>

      <HomePageAmenities/>

      <HomePageRooms/>

      <HomePageDinning/>

      <HomePageTestimonials/>

      <Footer/>

      <AboutUsPage/>
   
    </div>
  
  );
}
 


const AboutUs = () => {
  return (
    <div className="App" style={{  }}>
      <Header />
       <AboutUsPage/>
      <Footer/>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },

]);
const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export default App ;