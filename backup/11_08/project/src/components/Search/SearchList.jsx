import { useSelector } from 'react-redux';
import { SearchListWrap } from '../../page/Search/styled';
import SearchChannel from './SearchChannel';
import SearchMovies from './SearchMovies';

const SearchList = ({ Search, allMovies }) => {
    const { Channel } = useSelector((state) => state.channel);
    const { Movies } = Channel;
    const allChannel = Object.keys(Channel).map((key) => Channel[key]);
    const filteredChannel = allChannel.filter((channel) =>
        channel.channel_name.toLowerCase().includes(Search.toLowerCase())
    ); // 검색어와 일치하는 영상

    return (
        <SearchListWrap>
            {filteredChannel.map((channel) => (
                <SearchChannel key={channel.channel_id} channel={channel} Movies={Movies} />
            ))}
            <SearchMovies Search={Search} allMovies={allMovies} />
        </SearchListWrap>
    );
};

export default SearchList;
