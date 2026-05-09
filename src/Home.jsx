import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { Products } from "./products";
import { Category } from "./Category";

export function Home({search}){
    

    return(
        <>
        <Category/>
        <Products search={search} />
                </>
    )
}