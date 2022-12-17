import NavBar from "./NavBar";
import Banners from "./Banners";


const Home = () => {
    return (
        <>
            <NavBar />
            <div style={{ padding: '10px', backgroundColor: "#F2F2F2"}}>
            < Banners/>
            </div>
        </>
    )
}

export default Home;