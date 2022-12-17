import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchContaner = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: 14px;
`

const Search = () => {
    return (
        <SearchContaner>
            <InputSearch placeholder='Search for products, brands and more' />
            <SearchIcon style={{ color: '#2874f0', padding: 5}}/>
        </SearchContaner>
    )
}

export default Search;