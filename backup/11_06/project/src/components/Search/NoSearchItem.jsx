import { NoSearchWrap } from '../../page/Search/styled';

const NoSearchItem = () => {
    return (
        <NoSearchWrap>
            <div className="no-search">
                <h2 className="no-search-title">검색하여 시작하기</h2>
                <p className="no-search-desc">
                    내가 좋아할 만한 동영상 피드를 받을 수 있도록
                    <br />
                    동영상 시청을 시작해 보세요
                </p>
            </div>
        </NoSearchWrap>
    );
};

export default NoSearchItem;
