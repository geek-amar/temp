import { useStyle } from "./QuizOption.style";

const QuizOption = ({
  categoryId,
  disable,
  resultId,
  data,
  index,
  submit,
  id,
  setOptionNum,
}) => {
  const classes = useStyle({
    blur: disable,
  });
  return (
    <div
      className={classes.wrapper}
      key={data._id + id}
      onClick={() => {
        setOptionNum(true);
        if (!disable) submit(data._id, index);
      }}
    >
      <div
        className={classes.container}
        id={index + categoryId + "id"}
        key={data._id}
      >
        <div className={classes.list}>{index + 1}</div>
        <div className={classes.text}>{data ? data.text : null}</div>
      </div>
    </div>
  );
};

export default QuizOption;
