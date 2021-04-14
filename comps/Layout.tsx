import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div className='content'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;