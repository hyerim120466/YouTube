import SubscriptList from "../../components/Subscription/SubscriptList";
import SubscriptSort from "../../components/Subscription/SubscriptSort";

import { SubscriptionWrap } from "./styled";

const Subscription = () => {
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
