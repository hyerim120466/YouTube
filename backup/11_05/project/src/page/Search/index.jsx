import { useParams } from 'react-router-dom';
import { SearchWrap } from './styled';
import SearchList from '../../components/Search/SearchList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../store/modules/channelSlice';
import NoSearchItem from '../../components/Search/NoSearchItem';

const Search = () => {
    const { Search } = useParams();
    const { allMovies } = useSelector((state) => state.channel);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies());
    }, []);
    return (
        <SearchWrap>
            {!Search ? <NoSearchItem /> : <SearchList Search={Search} allMovies={allMovies} />}
        </SearchWrap>
    );
};

export default Search;
