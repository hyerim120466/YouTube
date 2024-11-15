import { useSelector } from 'react-redux';
import { SearchListWrap } from '../../page/Search/styled';
import Video from '../../ui/Youtube/Video';

const SearchList = ({ Search, allMovies }) => {
    // 검색어와 동영상 제목 일치하는 항목 필터링
    const filteredMovies = allMovies.filter((movie) =>
        movie.movie_title.toLowerCase().includes(Search.toLowerCase())
    );

    return (
        <SearchListWrap>
            {filteredMovies.map((movie) => (
                <Video key={movie.movie_id} movie={movie} />
            ))}
        </SearchListWrap>
    );
};

export default SearchList;
