import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nopage from "./Nopage";
import Front from "./Front";
import MyAccount from "./MyAccount";
import AllProperty from "./AllProperty";
import ShowAllProperty from "./ShowAllProperty";
import ResultsPage from "./ResultsPage";
import Login from "./Login/Login";
import House from "./property/House";
import PropertyForm from "./addproperty/PropertyForm";



export default function App()
{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/showallproperty" element={<ShowAllProperty />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/propertyform" element={<PropertyForm/>} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/allproperty" element={<AllProperty />} />
        <Route path="*" element={<Nopage />} />
        </Routes>
        </BrowserRouter>
    )
}