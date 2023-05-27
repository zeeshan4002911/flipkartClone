import NavBar from "./NavBar";
import Banners from "./Banners";
import { productData } from "../../constants/data";
import { styled } from '@mui/material';

const Home = () => {
    return (
        <>
            <NavBar />
            <div style={{ padding: '10px', backgroundColor: "#F2F2F2" }}>
                < Banners />
                <CardContainer>
                    <Card style={{padding: 0}}>
                        <img src="./electronics.webp" alt="best of electronics" />
                    </Card>
                    {
                        productData.map((product, index) => {
                            if (index < 15) {
                                return (
                                    <Card key={product.id}>
                                        <img src={product.url} alt="" width={'70%'} />
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                    </Card>
                                )
                            }
                        })
                    }
                </CardContainer>
            </div>
        </>
    )
}

export default Home;

const Card = styled('div')`
    min-width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 0.5em;
`

const CardContainer = styled('div')`
    background-color: #FFF;
    display: flex;
    margin: 10px 0;
    overflow-X: scroll;
`