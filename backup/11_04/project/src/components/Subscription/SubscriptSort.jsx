import { useEffect, useRef, useState } from "react";
import { SubscriptSortWrap } from "./styled";
import { useDispatch } from "react-redux";

const SubscriptSort = ({ sortData, setThisSortType, thisSortType }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const wrapRef = useRef(null);

  // 외부 클릭 감지 핸들러
  const outClick = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target)) {
      setShow(false); // 외부 클릭 시 show를 false로 변경
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outClick);
    return () => {
      document.removeEventListener("mousedown", outClick);
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <SubscriptSortWrap className="subscript-sort">
        <p className="subscript-select" onClick={() => setShow(!show)}>
          {thisSortType.name}
          <img
            src="https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg"
            alt="downIcon"
          />
        </p>
        <ul
          className="subscript-ul"
          style={{ display: show ? "block" : "none" }}
        >
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
