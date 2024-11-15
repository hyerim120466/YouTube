import { useParams } from 'react-router-dom';
import { SearchWrap } from './styled';
import SearchList from '../../components/Search/SearchList';

const Search = () => {
    const { Search } = useParams();

    return (
        <SearchWrap>
            <SearchList Search={Search} />
        </SearchWrap>
    );
};

export default Search;
