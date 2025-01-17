import React from "react";
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
// import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Footer from "./components/Footer.js";
// import Grocery from "./components/Grocery.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));
const Cart = lazy(()=>import("./components/Cart.js"));

const AppLayout = () =>{
    return (
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
     element: <Body/>
      }

      ,
      {
        path: "/home",
     element: <Body/>

      },
      {
        path: "/grocery",
     element: <Suspense><Grocery/></Suspense>

      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      },
      {
        path: "/cart",
        element: <Suspense><Cart/></Suspense>
      },
      {
        path: "/restaurants/:resID",
        element: <RestaurantMenu/>
      }

    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
