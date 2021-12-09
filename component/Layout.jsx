import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Layout({children}) {
    return (
        <div className="content">
            <Banner/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
