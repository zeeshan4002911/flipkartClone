import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Search from './Search';
import CustomButton from './CustomButton';

const StyledAppBar = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const StyledBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const header = () => {
    return (
        <StyledAppBar>
            <Toolbar style={{ minHeight: 55 }}>
                <StyledBox>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart" style={{ width: '75px' }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore
                            <Box component='span' style={{ color: '#FFE500' }}> Plus</Box>
                        </SubHeading>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus-icon" style={{ width: '10px', height: 10, marginLeft: 4 }} />
                    </Box>
                </StyledBox>
                <Search />
                < Box style={{ margin: '0 auto 0 1%'}}>
                    < CustomButton />
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
}

export default header;