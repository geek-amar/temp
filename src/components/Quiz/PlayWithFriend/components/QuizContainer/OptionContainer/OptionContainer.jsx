const OptionContainer = ({
  index,
  value,
  pauseResume,
  handleSelectOption,
  button,
  question,
  disable,
}) => {
  return (
    <div className={`fade-in ${value}`} id={value} key={value}>
      <button
        disabled={disable}
        className={`answer_animated animated flipInX ${button[value]}`}
        value={question !== null ? question.options[index]._id : ""}
        key={index}
        onClick={() => {
          if (disable === false) {
            pauseResume();
            handleSelectOption(question.options[index]._id, value);
          }
        }}
      >
        <p className="answer_number">{index + 1}</p>
        <p className={`answer__text hoverAnswer ${button[value]} `}>
          <span className={`ng_content ${button[value]}`}>
            {question !== null ? question.options[index].text : ""}
          </span>
        </p>
      </button>
    </div>
  );
};

export default OptionContainer;
