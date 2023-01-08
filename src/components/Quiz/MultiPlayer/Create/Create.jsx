import { LinearProgress } from "@mui/material";
import api from "api";
import SinglePlayerMobile from "assets/images/mobileTwoplayer.svg";
import SinglePlayerMobileLogo from "assets/images/MultiplayerTopBar.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import Ball from "common/ball/Ball";
import ErrorPopup from "common/ErrorPopup/ErrorPopup";
import Model from "components/Model/Model";
import useErrorPopup from "hooks/useErrorPopup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateQuizForm from "../forms/CreateQuizForm";
import CreateQuizPreview from "../forms/CreateQuizPreview";
import CreateQuizQuestions from "../forms/CreateQuizQuestions";
import { useStyle } from "./Create.style";
import CustomizedSteppers from "./CustomizedSteppers/CustomizedSteppers";

const CreateMultiPlayerQuiz = () => {
  const steps = [
    "Basic Quiz Details",
    "Customize Questions List",
    "Quiz Preview",
  ];
  const classes = useStyle();
  const history = useHistory();
  const { openPopup, closePopup, popRef, message } = useErrorPopup();
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [categories, setCategories] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [poolAmount, setPoolAmount] = React.useState(20);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [busy, setBusy] = React.useState(true);
  const [questions, setQuestions] = React.useState([
    {
      category: "",
      questionsCount: 0,
    },
  ]);

  const [createdQuiz, setCreatedQuiz] = React.useState(null);

  const handleQuestionsChange = (index, ev) => {
    const newQuestions = [...questions];
    if(ev.target.name === "questionsCount"){
      let val = ev.target.value;
      if(val < 0){
        val = 0;
      } else if(val > 100){
        val = 100;
      }
      newQuestions[index][ev.target.name] = val;
    } else {
      newQuestions[index][ev.target.name] = ev.target.value;
    }
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestions = [...questions];
    newQuestions.push({
      category: "",
      questionsCount: 0,
    });
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  React.useEffect(() => {
    setBusy(true);
    async function getAllCategories() {
      let res = await api.ikcplay.getAllCategories();

      setCategories(res.payload);

      setBusy(false);
    }

    getAllCategories();
  }, []);

  const handleCreateQuiz = async () => {
    try {
      setBusy(true);
      const quiz = {
        title,
        poolAmount,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        questions,
        categoryId: questions[0]?.category,
        liveQuiz: true,
        hidden: false,
        isFreebie: false,
        visibility: "private",
      };
      let res = await api.ikcplay.createPrivateQuiz(quiz);
      setCreatedQuiz(res.payload);
      // setOpen(true);
    } catch (error) {
      openPopup(error.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <Ball top={"28%"} width={100} left="-4%" />
        <Ball bottom={"0%"} margin="auto" top={"50%"} width={30} />
        <Ball right={"3%"} top="0" bottom="0" margin="auto" width={50} />
        <div className={classes.imageContainer}>
          <img className="image1" src={singlePageBackground} alt="" />
          <img className="image2" src={singlePageBackgroundBlue} alt="" />
        </div>
        <div className={classes.mobileImageContainer}>
          <img className="image1" src={SinglePlayerMobile} alt="" />
          <img className="image2" src={SinglePlayerMobileLogo} alt="" />
        </div>
        <div className={classes.section}>
          <div className={classes.account}>
            <span>My Account</span>
          </div>
          <div className={classes.header}>
            {/* <img src={Avatar2} alt="" /> */}
            <span>Create Multiplayer Quiz</span>
          </div>
          <div className={classes.accountContainer}>
            <div className={classes.right}>
              <CustomizedSteppers activeStep={activeStep} steps={steps} />
              {busy && <LinearProgress color="warning" />}

              <div className="rightContainer">
                {activeStep === 0 && (
                  <CreateQuizForm
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    title={title}
                    setTitle={setTitle}
                    poolAmount={poolAmount}
                    setPoolAmount={setPoolAmount}
                    setActiveStep={setActiveStep}
                  />
                )}
                {activeStep === 1 && (
                  <CreateQuizQuestions
                    categories={categories}
                    questions={questions}
                    handleQuestionsChange={handleQuestionsChange}
                    handleAddQuestion={handleAddQuestion}
                    handleRemoveQuestion={handleRemoveQuestion}
                    setActiveStep={setActiveStep}
                  />
                )}
                {activeStep === 2 && (
                  <CreateQuizPreview
                    handleCreateQuiz={handleCreateQuiz}
                    title={title}
                    startDate={startDate}
                    endDate={endDate}
                    poolAmount={poolAmount}
                    questions={questions}
                    setActiveStep={setActiveStep}
                    createdQuiz={createdQuiz}
                  />
                )}
                {/* <div className={classes.buttonContainer}>
                <Button onClick={() => setActiveStep(1)}>Next</Button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErrorPopup popRef={popRef} closePopup={closePopup} popupdata={message} />
      {open && (
        <Model
          header={"Quiz Created!"}
          description={"Share this code with your friend to play."}
          inputValue={createdQuiz.code}
          rightButton={"Continue"}
          funOnRightButton={() => history.push({pathname:`/multiplayer`,state:{page:3}})}
          isContent
        />
      )}
    </>
  );
};

export default CreateMultiPlayerQuiz;
