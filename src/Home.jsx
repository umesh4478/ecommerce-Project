import Categories from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Products } from "./products";

export function Home(){
    return(
        <>
        <Navbar/>
        <Categories/>
        <Products/>
        <Footer/>
        </>
    )
}