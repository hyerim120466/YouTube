import { useState } from 'react';
import { SubscriptSortWrap } from './styled';
import { useMouseOutside } from '../../hook/useMouseOutside';

const SubscriptSort = ({ sortData, setThisSortType, thisSortType }) => {
    const [show, setShow] = useState(false);
    const wrapRef = useMouseOutside(() => setShow(false));

    return (
        <div ref={wrapRef}>
            <SubscriptSortWrap className='subscript-sort'>
                <p className='subscript-select' onClick={() => setShow(!show)}>
                    {thisSortType.name}
                    <img
                        src='https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg'
                        alt=''
                    />
                </p>
                <ul className='subscript-ul' style={{ display: show ? 'block' : 'none' }}>
                    {sortData.map((sort) => (
                        <li
                            key={sort.id}
                            className={sort.type}
                            onClick={() => {
                                setThisSortType(sort);
                                setShow(!show);
                            }}
                        >
                            {sort.name}
                        </li>
                    ))}
                </ul>
            </SubscriptSortWrap>
        </div>
    );
};

export default SubscriptSort;
