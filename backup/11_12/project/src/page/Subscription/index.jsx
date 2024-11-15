import { useSelector } from "react-redux";
import SubscriptList from "../../components/Subscription/SubscriptList";
import SubscriptSort from "../../components/Subscription/SubscriptSort";

import { SubscriptionWrap } from "./styled";
import NotSubscription from "../../components/Subscription/NotSubscription";

const Subscription = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <SubscriptionWrap>
      {isAuth ? (
        <div className="subscriptInner">
          <h2 className="subscriptH2">모든 구독 채널</h2>
          <div className="subscription-content-box">
            <SubscriptList />
          </div>
        </div>
      ) : (
        <NotSubscription />
      )}
    </SubscriptionWrap>
  );
};

export default Subscription;
