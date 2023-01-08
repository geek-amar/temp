const QuizInfo = ({ value, text, count, color }) => {
  return (
    <div className="quiz_item_info">
      <div className="inner_div">
        <div ref={count} className="text_large">
          {value}
        </div>
        <div style={{ color: `${color}` }} className="subtext">
          {text}
        </div>
      </div>
    </div>
  );
};

export default QuizInfo;
