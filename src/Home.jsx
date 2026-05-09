import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { Products } from "./products";
import { Category } from "./Category";

export function Home(){
    const [search, setsearch]= useState('')

    return(
        <>
        <Navbar search={search} setsearch={setsearch} />
        <Category/>
        <Products search={search} />
        <Footer/>
        </>
    )
}