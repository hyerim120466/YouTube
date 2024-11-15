import { useNavigate, useParams } from 'react-router-dom';
import { StudioWrap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SubscribersList from '../../components/Studio/SubscribersList';
import CommentList from '../../components/Studio/CommentList';
import MovieList from '../../components/Studio/MovieList';
import { AddNewChannel } from '../../store/modules/channelSlice';
import Spinner from '../../components/Spinner';

const Studio = () => {
    const { User_ID } = useParams();
    const { Channel } = useSelector((state) => state.channel);
    const { isAuth, isLoginUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const thisChannel = Object.values(Channel).find(
        (channel) => channel.channel_id === Number(User_ID)
    );

    useEffect(() => {
        if (!isAuth) navigate('/login');
        if (!thisChannel) dispatch(AddNewChannel(isLoginUser));
    }, [isAuth, thisChannel, User_ID, Channel]);

    if (!thisChannel)
        return (
            <StudioWrap>
                <Spinner />
            </StudioWrap>
        );

    if (thisChannel)
        return (
            <StudioWrap>
                <div className='inner'>
                    <h2 className='studio-title'>채널 대시보드</h2>
                    <div className='content-box'>
                        <SubscribersList
                            subscribers={thisChannel.channel_subscribers}
                            channel={
                                thisChannel.Movies[0]?.movie_channel ||
                                isLoginUser.user_email.split('@')[0]
                            }
                        />
                        <MovieList movies={thisChannel.Movies} />
                        <CommentList
                            comment={thisChannel.Movies.flatMap(
                                (comment) => comment.movie_comments
                            )}
                            thisChannel={thisChannel}
                        />
                    </div>
                </div>
            </StudioWrap>
        );
};

export default Studio;
