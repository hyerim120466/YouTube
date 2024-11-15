import { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { RiFlagLine } from 'react-icons/ri';
const CommentItem = ({ item }) => {
    const { comment_user_name, comment_body } = item;
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
    };
    return (
        <li className='CommentList'>
            <div>
                <span className='user-profile'>{item.comment_user_name.charAt(0)}</span>
            </div>
            <div className='comment_userId'>
                <p className='userId'>@{comment_user_name}</p>
                <p>{comment_body}</p>
            </div>
            <button className='BelowBtn Comment' onClick={handleClick}>
                <IoMdMore />
            </button>
            {show && (
                <div className='Comment_report '>
                    <RiFlagLine /> 신고
                </div>
            )}
        </li>
    );
};

export default CommentItem;
