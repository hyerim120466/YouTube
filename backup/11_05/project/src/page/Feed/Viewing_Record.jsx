import { ViewingRecordWrap } from './styled';
import { useSelector } from 'react-redux';
import Video from '../../ui/Youtube/Video';

const Viewing_Record = () => {
    const watchedVideos = useSelector((state) => state.viewingRecord.watchedVideos);
    return (
        <ViewingRecordWrap>
            <div className='hearder'>
                <div className='inner'>
                    <h2>시청 기록</h2>
                </div>
            </div>
            <div className='viewing_content'>
                <div className='inner'>
                    {/* 시청한 동영상 출력 */}
                    <ul className='test'>
                        {watchedVideos.length > 0 ? (
                            watchedVideos.map((movie) => (
                                <li key={movie.movie_id}>
                                    <Video movie={movie} />
                                </li>
                            ))
                        ) : (
                            <p>시청한 영상이 없습니다.</p>
                        )}
                    </ul>
                </div>
            </div>
            <div className='viewing_record_menu'>
                <div className='search_wrap'>
                    <div className='search'>
                        <img
                            src='https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg'
                            alt='시청기록검색'
                        />
                        <input type='text' placeholder='시청 기록 검색' />
                    </div>

                    <div className='content'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC' />
                        <p>시청 기록 지우기 </p>
                    </div>
                    <div className='content'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhZJREFUSEu11UnojlEUx/HPXzJEip0hlAVFSLFSrGRIQoYFSkkSsZAFMoSVpEwlC0KJhWSMspBhJ1Mkc7JVpAwR7qn71vN/vHO97+p5nvfc+z33nN/53S4d/nV1eH+NAL2xEDMxASPxF+/xCNdxAb9qJVoPMAtH86b1Dvoaa3CrWlAtwM6U6Y684APO4Soe528TMReLMSx/24T9ZUg1QGXzr1iGy7ks1RLsgUU4gb7YgIPFwDIgsrqE7ynjyWnxsyZFMAX3EMBpuFtZVwT0x0sMxnKcaXLzSthGHMCL1PjxlcYXAWtxJNX1OcbVKUstbq+srkhwPi5GYBFwDaGcdRlU3CikWYwvv1di92ILjmN1GfAx/TEUo/C2lGazgKm4g4epl5PKgG9ZCaGGH20CBuETPmNgGRCyjEYPQDy3U6JY+yWvj+duPYjuj84KeNomIMryIAtlbBlwNklsKTZjX5uAbdid+ng69XFFGRDaP4VXGIM/Lc5BzzQ/bzAcS3C+DIjmRpkiYGUyuZMtAtZnm4hhjUH7WQbE+wzcaMMqwlbuZ6uYnqXabXCKyW7FnqyGMLsrdU4S3hPliMHqlyQapzhcjK9l19uTwnblwHfZrmPSnyAsIaxkXnbSIdlWwkkPlZOpd+HMScZ3LE93vXbEhbMKt6sFNboy+6SsF2B2btyInG2oJfR+M5va71oZNAK0KKT/wzsO+Afx62wZ7JyvrQAAAABJRU5ErkJggg==' />
                        <p>시청 기록 일시중지</p>
                    </div>
                </div>
            </div>
        </ViewingRecordWrap>
    );
};

export default Viewing_Record;
