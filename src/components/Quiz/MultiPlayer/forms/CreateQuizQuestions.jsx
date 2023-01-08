import { Add, Close } from "@material-ui/icons";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useStyle } from "./CreateQuizForm.style";

const CreateQuizQuestions = ({
  setActiveStep,
  questions,
  handleQuestionsChange,
  handleAddQuestion,
  handleRemoveQuestion,
  categories,
}) => {
  const classes = useStyle();

  const handleSubmit = () => {
    setActiveStep(2);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.bottom}>
          <div className={classes.details}>
            <div className={classes.left}>
              {questions.map((question, index) => (
                <div key={index} className={classes.input}>
                  <div className="label">
                    <select
                      style={{ color: "white" }}
                      value={question.category || ""}
                      name="category"
                      onChange={(ev) => handleQuestionsChange(index, ev)}
                      required
                    >
                      <option style={{ color: "grey" }} disabled value="">
                        Select a category
                      </option>
                      {categories.map((v, i) => (
                        <option key={v._id} value={v._id}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="label">
                    <input
                      type="number"
                      placeholder="No. of Questions"
                      value={question.questionsCount || ""}
                      name="questionsCount"
                      required
                      onChange={(ev) => handleQuestionsChange(index, ev)}
                    />
                  </div>
                  <IconButton
                    onClick={() => handleRemoveQuestion(index)}
                    color="warning"
                    size="large"
                  >
                    <Close />
                  </IconButton>
                </div>
              ))}

              <Button
                sx={{ fontSize: "14px" }}
                color="warning"
                onClick={handleAddQuestion}
                startIcon={<Add />}
              >
                Add Question
              </Button>

              <div className={classes.check}>
                <div>
                  <span>
                    Max No. of Questions:{" "}
                    {questions.reduce((prev, curr) => {
                      return prev + +curr.questionsCount;
                    }, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button onClick={() => setActiveStep(0)}>Prev</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuizQuestions;
