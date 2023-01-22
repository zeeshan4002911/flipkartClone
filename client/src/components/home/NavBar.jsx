import { Box, styled, Typography } from "@mui/material";
import {navData} from "../../constants/data";

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`

const NavBar = () => {
    return (
       <Component>
            {
                navData.map( data => (
                    <Box key={data.url} style={{ padding: '12px 8px', textAlign: 'center'}}>
                        <img src={data.url} alt={`${data.text}-pic`} style={{ width: 65}}/>
                        <Typography style={{fontSize: 14}}>{data.text}</Typography>
                    </Box>
                ))
            }
       </Component>
    )
}

export default NavBar;