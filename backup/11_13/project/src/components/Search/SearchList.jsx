import { useSelector } from 'react-redux';
import { SearchListWrap } from '../../page/Search/styled';
import SearchChannel from './SearchChannel';
import SearchMovies from './SearchMovies';

const SearchList = ({ Search, allMovies }) => {
    const { Channel } = useSelector((state) => state.channel);
    const allChannel = Object.keys(Channel).map((key) => Channel[key]);

    const filteredChannel = allChannel.filter((channel) =>
        channel.channel_name.toLowerCase().includes(Search.toLowerCase())
    ); // 검색어와 일치하는 영상

    const filteredMovies = allMovies.filter(
        (movie) =>
            movie.movie_title.toLowerCase().includes(Search.toLowerCase()) ||
            movie.movie_category.toLowerCase().includes(Search.toLowerCase())
    );

    if (filteredChannel.length === 0 && filteredMovies.length === 0) {
        return (
            <SearchListWrap>
                <p className='not-search'>"{Search}" 찾으시는 검색 결과가 없습니다.</p>
            </SearchListWrap>
        );
    }

    if (filteredChannel.length > 0 || filteredMovies.length > 0)
        return (
            <SearchListWrap>
                {filteredChannel.map((channel) => (
                    <SearchChannel key={channel.channel_id} channel={channel} />
                ))}
                <SearchMovies Search={Search} filteredMovies={filteredMovies} />
            </SearchListWrap>
        );
};

export default SearchList;
