import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



const Skeleton = () => {
    return <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{flex: 1}}>
            <Outlet />
        </div>
        <Footer />
    </div>
}

export default Skeleton;