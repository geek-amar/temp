const QuizInfo = ({ value, text, count }) => {
  return (
    <div className="quiz_item_info">
      <div className="inner_div">
        <div ref={count} className="text_large">
          {value}
        </div>
        <div className="subtext">{text}</div>
      </div>
    </div>
  );
};

export default QuizInfo;
