import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCarIcon from '@mui/icons-material/ShoppingCart';
import Login from '../login/loginDialog';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`
const buttonStyle = {
    color: '#2874f0',
    background: "#fff",
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: '2px',
    boxShadow: 'none',
    fontWeight: '600',
    height: '32px'
}

const CustomButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { account } = useContext(DataContext);
    return (
        <Wrapper>
            {
                account ? <Typography>{account}</Typography> :
                    <Button variant='contained' style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>Login</Button>
            }
            <Typography style={{ marginTop: 3, width: 130, cursor: "pointer" }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, width: 50, cursor: "pointer" }}>More</Typography>
            <Box style={{ display: 'flex', cursor: "pointer" }}>
                <ShoppingCarIcon />
                <Typography>Cart</Typography>
            </Box>
            <Login isOpen={isOpen} setIsOpen={setIsOpen} />
        </Wrapper>
    )
}

export default CustomButton;