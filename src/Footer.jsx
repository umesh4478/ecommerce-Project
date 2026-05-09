import { Link } from "lucide-react"
const Footer = () => {
    return (
        <footer className="bg-white px-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                <div>
                    <h2 className="text-xl font-bold mb-6">Useful Links</h2>
                    <div className="grid grid-cols-3 gap-4 text-gray-500">
                        <p>Blog</p>
                        <p>Partner</p>
                        <p>Recipes</p>
                        <p>Privacy</p>
                        <p>Franchise</p>
                        <p>Bistro</p>
                        <p>Terms</p>
                        <p>Seller</p>
                        <p>District</p>
                        <p>FAQs</p>
                        <p>Warehouse</p>
                        <p>Blinkit Ambulance</p>
                        <p>Security</p>
                        <p>Deliver</p>
                        <p>Contact</p>
                        <p>Resources</p>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-6">
                        Categories <span className="text-green-600 text-base font-normal ml-3">see all</span>
                    </h2>

                    <div className="grid grid-cols-3 gap-4 text-gray-500">
                        <p>Vegetables & Fruits</p>
                        <p>Dairy & Breakfast</p>
                        <p>Munchies</p>
                        <p>Cold Drinks & Juices</p>
                        <p>Instant & Frozen Food</p>
                        <p>Tea, Coffee & Health Drinks</p>
                        <p>Bakery & Biscuits</p>
                        <p>Sweet Tooth</p>
                        <p>Atta, Rice & Dal</p>
                        <p>Beauty & Cosmetics</p>
                        <p>Books</p>
                        <p>Electronics & Electricals</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 flex flex-wrap justify-between items-center gap-4">
                <p className="text-gray-500">© Blink Commerce Private Limited, 2016-2026</p>

                <h3 className="  text-xl   p-3 font-bold text-green-400 ">Download App</h3>
                   
                <div className="flex gap-6 text-2xl">
                    <span className="text-3xl"><i className="fa-brands fa-facebook"></i></span>
                    <span className="text-3xl" ><i className="fa-brands fa-x-twitter"></i></span>
                    <Link>
                        <span className="text-3xl">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                    </Link>  
                            <span className="text-3xl" ><i className="fa-brands fa-linkedin-in"></i></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer