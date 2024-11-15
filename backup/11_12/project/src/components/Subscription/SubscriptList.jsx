import { useState } from 'react';
import { SubscriptListWrap } from './styled';
import SubscriptItem from './SubscriptItem';
import { useSelector } from 'react-redux';
import SubscriptSort from './SubscriptSort';
import sortData from '../../assets/api/SortSubscript';

const SubscriptList = () => {
    const { Channel } = useSelector((state) => state.channel);
    const allChannel = Object.keys(Channel).map((key) => Channel[key]);
    const [thisChannelID, setThisChannelID] = useState(null);
    const [thisSortType, setThisSortType] = useState(sortData[0]);
    const handleChangeThisId = (id) => {
        setThisChannelID(id);
    };
    const { isLoginUser } = useSelector((state) => state.auth);

    const thisSubscriptChannel = allChannel.filter((channel) =>
        isLoginUser?.Subscription_Id?.includes(channel.channel_id)
    );

    return (
        <SubscriptListWrap>
            <SubscriptSort
                sortData={sortData}
                setThisSortType={setThisSortType}
                thisSortType={thisSortType}
            />
            {thisSubscriptChannel
                .sort((a, b) => {
                    if (thisSortType.type === 'channel_name') {
                        if (a[thisSortType.type] > b[thisSortType.type]) return 1;
                        if (a[thisSortType.type] < b[thisSortType.type]) return -1;
                        return 0;
                    } else {
                        if (b[thisSortType.type] > a[thisSortType.type]) return 1;
                        if (b[thisSortType.type] < a[thisSortType.type]) return -1;
                        return 0;
                    }
                })
                .map((channel) => (
                    <SubscriptItem
                        key={channel.channel_id}
                        channel={channel}
                        thisChannelID={thisChannelID}
                        handleChangeThisId={handleChangeThisId}
                    />
                ))}
        </SubscriptListWrap>
    );
};

export default SubscriptList;
