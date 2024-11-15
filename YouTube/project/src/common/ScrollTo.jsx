const ScrollTo = () => {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 스무스 스크롤 추가
    });
  };
  return (
    <div className="scroll_up" onClick={scrollToUp}>
      <button className="scroll_up_btn">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUZJREFUaEPtllEOwjAMQ7ObwcmAk8HNgEibNI2usZdkaBB+JtE29bNDxiAH/wwH1y8F8O0EK4FKwOnAX7bQ02madZwyldo83lwARgSUqdTmX0nA6uFd17cksKtA67ICMBy6juvT0zKUXs9MQEVfRkW39zMFIgtgLn5yNQUiA6AlPg0iGqAnPgUiEgARHw4RBcCID4WIANgiPgzCC7AmXifONELnYpff6ZprOnkAeuJ1bfm3W++yzuz2IkOEtABUIHIWBtmSACpgDSAUggVAxavIHkAYBANwEpF7I9u1H6EF0IM4i8gD6SMGoHVhb4IgAGzNDyYWYH6hNf5QAKZmCIAW0XayImYA0JphAEh7sgBIzQJgXKoEELe2TCGkLvIiQ+t09xVAx576DSA9ltlCyP3uPQXgttBZoBJwGug+Xgm4LXQWOHwCL424RTGF/pxQAAAAAElFTkSuQmCC"
          alt=""
        />
      </button>
    </div>
  );
};

export default ScrollTo;
