import { useState } from 'react';
import  { AiOutlineSearch } from 'react-icons/ai'
import { SearchInputWrapper } from './search-input.styled';
const SearchInput = () => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchText(value)

    }
    return ( 
        <SearchInputWrapper>
            <input
             value={searchText} 
             onChange={handleChange}
             placeholder="search in calendar..."
             />
            <AiOutlineSearch />
        </SearchInputWrapper>
     );
}
 
export default SearchInput;