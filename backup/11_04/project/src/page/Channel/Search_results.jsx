import React from 'react';
import { useSelector } from 'react-redux';
import Video from '../../ui/Youtube/Video';
import { SearchMovieWrap } from './styled';
import { useParams } from 'react-router-dom';

const Search_results = ({ searchTerm }) => {
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);

    // 현재 채널의 동영상 필터링
    const filteredMovies =
        Channel[Channel_name]?.Movies.filter(
            (movie) =>
                movie.movie_title.includes(searchTerm) || movie.movie_body.includes(searchTerm)
        ) || [];

    return (
        <SearchMovieWrap>
            <div className='search_results'>
                <ul className='test'>
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => <Video key={movie.movie_id} movie={movie} />)
                    ) : (
                        <p>이 채널에 ‘{searchTerm}’와(과) 일치하는 콘텐츠가 없습니다.</p>
                    )}
                </ul>
            </div>
        </SearchMovieWrap>
    );
};

export default Search_results;
