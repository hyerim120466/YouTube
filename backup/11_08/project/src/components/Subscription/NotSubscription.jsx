import LoginButton from "../../ui/Header/LoginButton";
import { NotSubscriptionWrap } from "./styled";

const NotSubscription = () => {
  return (
    <NotSubscriptionWrap>
      <img
        src="https://github.com/React-Project-Team1/data-center/blob/main/Subscription_logout.png?raw=true"
        alt="icon"
        className="Not_login_subscription_img"
      />
      <strong className="Not_login_subscription_title">
        새로운 동영상을 놓치지 마세요.
      </strong>
      <p className="Not_login_subscription_desc">
        즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.
      </p>
      <div className="login_button">
        <LoginButton />
      </div>
    </NotSubscriptionWrap>
  );
};

export default NotSubscription;
