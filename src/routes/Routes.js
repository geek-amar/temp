import Loadable from "components/Loadable/Loadable";
import { lazy } from "react";

/**
 * @description This is the lazy loading of the routes.
 */
const HowToPlay = Loadable(lazy(() => import("components/Home/HowToPlay")));
const FreeQuiz = Loadable(lazy(() => import("components/Quiz/FreeQuiz")));
const Category = Loadable(
  lazy(() => import("components/Quiz/FreeQuiz/Category"))
);
const Levels = Loadable(lazy(() => import("components/Quiz/FreeQuiz/Levels")));
const Create = Loadable(
  lazy(() => import("components/Quiz/MultiPlayer/Create/Create"))
);
const Detail = Loadable(
  lazy(() => import("components/Quiz/MultiPlayer/Detail/Detail"))
);
const MultiPlayer = Loadable(
  lazy(() => import("components/Quiz/MultiPlayer/MultiPlayer"))
);
const LeaderboardResult = Loadable(
  lazy(() => import("components/Quiz/MultiPlayer/Result/LeaderboardResult"))
);
const AccountSetting = Loadable(
  lazy(() => import("components/AccountSetting/Account"))
);
const Home = Loadable(lazy(() => import("components/Home/Home")));
const LogIn = Loadable(lazy(() => import("components/Auth/Login")));
const GamePage = Loadable(
  lazy(() => import("components/Quiz/PlayWithFriend/components/GamePage"))
);
const Categories = Loadable(
  lazy(() => import("components/Quiz/PlayWithFriend/components/Categories"))
);
const PlayWithFriend = Loadable(
  lazy(() => import("components/Quiz/PlayWithFriend"))
);
const MultiPlayerQuiz = Loadable(
  lazy(() => import("components/Quiz/MultiPlayerQuiz/MultiPlayerQuiz"))
);
// Daily Quiz
const DailyQuiz = Loadable(
  lazy(() => import("components/Quiz/DailyQuiz/DailyQuiz"))
);
const DailyQuizLeaderBoard = Loadable(
  lazy(() => import("components/Quiz/DailyQuiz/Leaderboard"))
);

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    component: Home,
    isPrivate: false,
  },
  {
    name: "LogIn",
    path: "/login",
    component: LogIn,
    isPrivate: false,
  },
  {
    name: "AccountSetting",
    path: "/account",
    component: AccountSetting,
    isPrivate: true,
  },
  {
    name: "How to Play",
    component: HowToPlay,
    path: "/howtoplay",
    isPrivate: false,
  },
  {
    name: "FreeQuiz",
    path: "/quiz/play/:quizId",
    component: FreeQuiz,
    isPrivate: false,
  },
  {
    name: "Category",
    path: "/quiz/category",
    component: Category,
    isPrivate: false,
  },
  {
    name: "Levels",
    path: "/quiz/levels/:categoryId",
    component: Levels,
    isPrivate: false,
  },

  {
    name: "Play With Friend",
    path: "/play-with-friend",
    component: PlayWithFriend,
    isPrivate: true,
  },
  {
    name: "Play With Friend",
    path: "/join/:code",
    component: PlayWithFriend,
    isPrivate: false,
  },
  {
    name: "Categories",
    path: "/play-with-friend/categories",
    component: Categories,
    isPrivate: true,
  },
  {
    name: "Game Page",
    path: "/play-with-friend/gamepage",
    component: GamePage,
    isPrivate: true,
  },
  {
    name: "MultiPlayer",
    path: "/multiplayer/private/quiz/:quizCode/:quizId",
    component: MultiPlayerQuiz,
    isPrivate: true,
  },
  {
    name: "MultiPlayer",
    path: "/multiplayer",
    component: MultiPlayer,
    isPrivate: false,
  },
  {
    name: "MultiPlayer",
    path: "/multiplayer/join/:code",
    component: MultiPlayer,
    isPrivate: true,
  },
  {
    name: "MultiPlayer",
    path: "/multiplayer/create",
    component: Create,
    isPrivate: true,
  },
  {
    name: "MultiplayerDetails",
    path: "/multiplayer/details/:id",
    component: Detail,
    isPrivate: false,
  },
  {
    name: "MultiplayerDetails",
    path: "/multiplayer/quiz/:quizId",
    component: MultiPlayerQuiz,
    isPrivate: false,
  },
  {
    name: "MultiplayerDetails",
    path: "/multiplayer/leaderboard/:id",
    component: LeaderboardResult,
    isPrivate: false,
  },
  {
    name: "DailyQuiz",
    path: "/dailyquiz",
    component: DailyQuiz,
    isPrivate: false,
  },
  {
    name: "DailyQuizStart",
    path: "/dailyquiz/play/:dailyQuizId",
    component: MultiPlayerQuiz,
    isPrivate: true,
  },
  {
    name: "DailyQuizLeaderboard",
    path: "/dailyquiz/leaderboard/:dailyQuizId",
    component: DailyQuizLeaderBoard,
    isPrivate: false,
  }
];
