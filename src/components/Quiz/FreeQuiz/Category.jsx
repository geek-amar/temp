import { Spinner } from "assets";
import basicGk from "assets/images/basicGk.svg";
import booksAndAuthors from "assets/images/booksAndAuthors.svg";
import chemistry from "assets/images/chemistry.svg";
import entertainment from "assets/images/entertainment.svg";
import generalScience from "assets/images/generalScience.svg";
import indianHistory from "assets/images/indianHistory.svg";
import inventions from "assets/images/inventions.svg";
import SinglePlayerMobileLogo from "assets/images/mobileSingleLogo.svg";
import SinglePlayerMobile from "assets/images/mobileSinglePlayer.svg";
import personality from "assets/images/personality.svg";
import physics from "assets/images/physics.svg";
import politics from "assets/images/politics.svg";
import singlePageBackground from "assets/images/singlePageBackground.svg";
import singlePageBackgroundBlue from "assets/images/singlePageBackgroundBlue.svg";
import SinglePlayer from "assets/images/singleQuizLogo.svg";
import sports from "assets/images/sports.svg";
import technologies from "assets/images/technologies.svg";
import Ikc from "assets/images/trophy.svg";
import worldGeography from "assets/images/worldGeography.svg";
import worldOrganizations from "assets/images/worldOrganizations.svg";
import Ball from "common/ball/Ball";
import ErrorPopup from "common/ErrorPopup/ErrorPopup";
import useErrorPopup from "hooks/useErrorPopup";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCategories } from "../../../store/actions/categoryAction";
import { useStyle } from "./Category.style";
import "./FreeQuiz.css";

export const images = {
  Sports: sports,
  Chemistry: chemistry,
  "Basic General Knowledge": basicGk,
  "Books and Author": booksAndAuthors,
  "General Science": generalScience,
  "Indian History": indianHistory,
  Inventions: inventions,
  Personalities: personality,
  Physics: physics,
  Politics: politics,
  Technology: technologies,
  "World Geography": worldGeography,
  "World Organizations": worldOrganizations,
  Entertainment: entertainment,
};

function ClassicCategory(props) {
  const classes = useStyle(props);
  const { dispatch, categories } = props;
  const { openPopup, closePopup, popRef, message } = useErrorPopup();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchAllCategories());
    }
    dispatch(fetchAllCategories(openPopup));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <img
        src={singlePageBackground}
        className="front"
        alt="singlePageBackground"
      />
      <img
        src={singlePageBackgroundBlue}
        className="back"
        alt="singlePageBackgroundBlue"
      />
      <div className="mobileLogos">
        <img alt="" className="imageMobile1" src={SinglePlayerMobile} />
        <img alt="" className="imageMobile" src={SinglePlayerMobileLogo} />
      </div>
      <div className={classes.wrapper}>
        <Ball left={"-4%"} width={100} />
        <div className={classes.header}>
          <span className="title">
            <img src={Ikc} alt={"Comming"} width={40} />
            Single player
          </span>
          <span>Play single player games to practice and earn points</span>
        </div>
        <div className={classes.imageContainer}>
          <Ball top={"5%"} left={"10%"} width={30} />
          <img alt="" className="image" src={SinglePlayer} />
          <Ball bottom={"5%"} width={60} />
        </div>
      </div>

      <div className={classes.cards}>
        <Ball left={"0.2%"} top={"10%"} width={20} />

        {!categories.isLoading ? (
          categories?.category?.map((item) => {
            return (
              <Link to={`/quiz/levels/${item._id}`} key={item._id}>
                <div className={classes.card}>
                  <div className={classes.content}>
                    <img src={item.icon} width={100} style={{maxHeight:"100%"}} alt="" />
                    <span>{item.name}</span>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>

      <ErrorPopup popRef={popRef} closePopup={closePopup} popupdata={message} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.Categories,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(ClassicCategory);
