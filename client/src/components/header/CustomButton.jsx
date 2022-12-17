import { Box, Button, Typography, styled } from '@mui/material'; 
import ShoppingCarIcon from '@mui/icons-material/ShoppingCart';

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
    return (
        <Wrapper>
           <Button variant='contained' style={buttonStyle}>Login</Button>
           <Typography style={{ marginTop: 3, width: 130}}>Become a Seller</Typography>
           <Typography style={{ marginTop: 3, width: 50}}>More</Typography>
           <Box style={{display : 'flex'}}>
                <ShoppingCarIcon />
                <Typography>Cart</Typography>
           </Box>
        </Wrapper>
    )
}

export default CustomButton;