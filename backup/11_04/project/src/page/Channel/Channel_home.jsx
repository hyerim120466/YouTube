import { useDispatch, useSelector } from "react-redux";
import { ChannelHomeWrap } from "./styled";
import Video from "../../ui/Youtube/Video";
import { useParams } from "react-router-dom";


const Channel_home = () => {
 
    const { Channel_name } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    return (
        <>
    <ChannelHomeWrap>
    <div className="channel_home_inner">
    <div className="channel_main">
        <div className="channel_mainvideo">
        {Channel[Channel_name].Movies && Channel[Channel_name].Movies.length > 0 && (
                            <Video key={Channel[Channel_name].Movies[0].movie_id} movie={Channel[Channel_name].Movies[0]} />
                        )}
        </div>     
    </div>
    </div>
    
    </ChannelHomeWrap>
    
    <div className="channel_home">
    <h2>추천</h2>
    <ul className='test'>
    {
        Channel[Channel_name].Movies.map(movie=><Video key={movie.movie_id} movie={movie}/>)
    }
</ul>
    </div>
    </>);
}
export default Channel_home;