import { Add, CalendarToday, Remove } from "@material-ui/icons";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useStyle } from "./CreateQuizForm.style";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const CreateQuizForm = ({
  setActiveStep,
  title,
  setTitle,
  poolAmount,
  setPoolAmount,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const classes = useStyle();

  const handleSubmit = () => {
    setActiveStep(1);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.bottom}>
          <div className={classes.details}>
            <div className={classes.left}>
              <label className={classes.titleLabel} htmlFor="title">
                Title of Quiz <span style={{ color: "red" }}>*</span>
              </label>
              <input
                id="title"
                className={classes.textInput}
                placeholder="Quiz Title"
                value={title}
                required
                onChange={(ev) => setTitle(ev.target.value)}
              />

              <div className={classes.input}>
                <div className="label">
                  <label htmlFor="startDate">Start Date</label>
                  <Datetime
                    id="startDate"
                    value={startDate}
                    onChange={(v) => {
                      setStartDate(v);
                    }}
                    inputProps={{
                      placeholder: "mm/dd/yyy --:-- --",
                      required: true,
                    }}
                  />
                </div>
                <div className="label">
                  <label htmlFor="endDate">End Date</label>
                  <Datetime
                    id="endDate"
                    value={endDate}
                    onChange={(v) => {
                      setEndDate(v);
                    }}
                    inputProps={{
                      placeholder: "mm/dd/yyy --:-- --",
                      required: true,
                    }}
                  />
                </div>
              </div>

              <div className={classes.entryFee}>
                <span class="span">Entry Fee: </span>
                <IconButton
                  disabled={poolAmount <= 20}
                  onClick={() => setPoolAmount(poolAmount - 20)}
                  color="warning"
                  component="span"
                >
                  <Remove />
                </IconButton>
                <span class="span">{poolAmount}</span>
                <IconButton
                  onClick={() => setPoolAmount(poolAmount + 20)}
                  color="warning"
                  component="span"
                >
                  <Add />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuizForm;
