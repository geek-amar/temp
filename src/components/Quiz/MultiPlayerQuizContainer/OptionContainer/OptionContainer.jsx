import { useEffect, useRef, useState } from "react";

const OptionContainer = ({
  index,
  value,
  pauseResume,
  handleSelectOption,
  button,
  question,
  disable,
  intermediate,
  hide,
  hideref,
  answerId,
}) => {
  const decide = () => {
    if (
      parseInt(hideref.current) > 0 &&
      question.options[index]._id !== answerId
    ) {
      hideref.current = hideref.current - 1;
      return true;
    } else return false;
  };

  return !decide() ? (
    <div className={`fade-in ${value} `} id={value} key={value}>
      <button
        disabled={disable}
        className={`answer_animated animated flipInX ${button[value]}`}
        value={question !== null ? question.options[index]._id : "Loading..."}
        key={index}
        onClick={() => {
          if (disable === false) {
            pauseResume();
            // OptionID, value = one,two,three
            handleSelectOption(question.options[index]._id, value);
          }
        }}
      >
        <p className="answer_number">{index + 1}</p>
        <p className={`answer__text ${intermediate[value]} ${button[value]} `}>
          <span
            className={`ng_content ${intermediate[value]} ${button[value]}`}
          >
            {question !== null ? question.options[index].text : "Loading..."}
          </span>
        </p>
      </button>
    </div>
  ) : null;
};

export default OptionContainer;
