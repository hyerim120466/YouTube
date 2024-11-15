import Video from '../../ui/Youtube/Video';

const SearchMovies = ({ filteredMovies }) => {
    // 검색어와 동영상 제목 일치하는 항목 필터링
    if (filteredMovies)
        return (
            <li className='movie-item'>
                <ul>
                    {filteredMovies.map((movie) => (
                        <Video key={movie.movie_id} movie={movie} />
                    ))}
                </ul>
            </li>
        );
};

export default SearchMovies;
