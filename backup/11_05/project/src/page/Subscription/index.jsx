import { useEffect } from "react";
import SubscriptList from "../../components/Subscription/SubscriptList";
import SubscriptSort from "../../components/Subscription/SubscriptSort";

import { SubscriptionWrap } from "./styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    !isAuth && navigate("/login");
  }, []);
  return (
    <SubscriptionWrap>
      <div className="subscriptInner">
        <h2 className="subscriptH2">모든 구독 채널</h2>
        <div className="subscription-content-box">
          <SubscriptList />
        </div>
      </div>
    </SubscriptionWrap>
  );
};

export default Subscription;
