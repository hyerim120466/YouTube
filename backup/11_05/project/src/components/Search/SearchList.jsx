import { useSelector } from 'react-redux';
import { SearchListWrap } from '../../page/Search/styled';
import Popup from '../../ui/popup/Popup';
import SearchChannel from './SearchChannel';
import SearchMovies from './SearchMovies';

const SearchList = ({ Search, allMovies }) => {
    const { Channel } = useSelector((state) => state.channel);
    const allChannel = Object.keys(Channel).map((key) => Channel[key]);
    const filteredChannel = allChannel.filter((channel) =>
        channel.channel_name.toLowerCase().includes(Search.toLowerCase())
    );
    return (
        <SearchListWrap>
            {filteredChannel.map((channel) => (
                <SearchChannel key={channel.channel_id} channel={channel} />
            ))}
            <SearchMovies Search={Search} allMovies={allMovies} />
            <Popup />
        </SearchListWrap>
    );
};

export default SearchList;
