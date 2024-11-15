const ScrollTo = () => {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // 스무스 스크롤 추가
    });
  };
  return (
    <div className="scroll_up" onClick={scrollToUp}>
      <button className="scroll_up_btn"></button>
    </div>
  );
};

export default ScrollTo;
