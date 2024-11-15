import { useParams } from 'react-router-dom';
import { SearchWrap } from './styled';

const Search = () => {
    const { Search } = useParams();
    return (
        <SearchWrap>
            <h2>Search {Search}</h2>
        </SearchWrap>
    );
};

export default Search;
