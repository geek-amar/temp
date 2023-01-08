import { USER_SERVER } from "config";
import { processRequest } from "utils";

async function nativeFetch(endpoint = "/", options = {}) {
  if (!options.headers) {
    options.headers = {};
  }
  options.headers["Content-Type"] = "application/json";
  if (localStorage.getItem("token")) {
    options.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
  }

  return processRequest(USER_SERVER + endpoint, options);
}

const ikcplay = {
  async fetch(ep, options) {
    if (options) {
      return nativeFetch(ep, options);
    }
    return nativeFetch(ep);
  },

  getUser: async function () {
    return nativeFetch("/user");
  },

  updateUser: async function ({ userDetails }) {
    return nativeFetch("/user", {
      method: "PATCH",
      body: JSON.stringify(userDetails),
    });
  },

  getAllCategories: async function () {
    return nativeFetch("/quiz/fetchAllCategories");
  },

  getLevelsForCategory: async function (categoryId = "") {
    const token = localStorage.getItem("token");

    const endpoint = token
      ? "/singlePlayerQuiz/fetchQuiz"
      : "/singlePlayerQuiz/fetchQuiz/guest";

    return nativeFetch(endpoint + "?categoryId=" + categoryId);
  },

  getQuizzes: async function (type = "live", page = 0) {
    const token = localStorage.getItem("token");

    if (type === "private") {
      return nativeFetch(`/quiz/fetchPrivateQuiz?pagination=${page}`);
    }

    const endpoint = token ? "/quiz/fetch" : "/quiz/fetch/guest";
    return nativeFetch(endpoint + "?type=" + type);
  },

  fetchPrivateQuizFromCode: async function (code) {
    return nativeFetch(`/quiz/code?code=${code}`);
  },

  createPrivateQuiz: async function (quiz) {
    return nativeFetch("/quiz/createPrivateQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    });
  },

  startPrivateQuiz: async function (code) {
    return nativeFetch(`/quiz/startPrivateQuiz?code=${code}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  startSinglePlayerQuiz: async function (quizId = "") {
    const token = localStorage.getItem("token");

    const endpoint = token
      ? "/singlePlayerQuiz/start"
      : "/singlePlayerQuiz/start/guest";

    return nativeFetch(endpoint + "?quizId=" + quizId);
  },
  endSinglePlayerQuiz: async function (quizId = "") {},
  submitSinglePlayerQuizAnswer: async function () {},
  registerForMultiplayerQuiz: async function (quizId) {},

  twoPlayerQuiz: {
    create: async function (categoryId) {
      return nativeFetch(`/duoQuiz/create?categoryId=${categoryId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    join: async function (roomCode) {
      return nativeFetch(`/duoQuiz/join?code=${roomCode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    getIsCreator: async function (roomId) {
      return nativeFetch(`/duoQuiz/isCreator?roomId=${roomId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
  // Daily Quiz
  getDailyQuiz: async function (time = "present") {
    if(localStorage.getItem("token")){
      return nativeFetch(`/dailyQuiz/fetch?time=${time}`);
    }
    return nativeFetch(`/dailyQuiz/fetchGuest?time=${time}`);
  },
  getLeaderBoard: async function(quizId){
    if(localStorage.getItem("token")){
      return nativeFetch(`/dailyQuiz/leaderboard?quizId=${quizId}`)
    }
    return nativeFetch(`/dailyQuiz/leaderboardGuest?quizId=${quizId}`)
  }
};

export default ikcplay;
