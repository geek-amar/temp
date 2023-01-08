import { Link } from "react-router-dom";
import LOGO from "../../assets/images/QuizImg.svg";

// const CategoryColors = [
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(84, 74, 125), rgb(255, 212, 82))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(17, 153, 142), rgb(56, 239, 125))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(15, 12, 41), rgb(48, 43, 99), rgb(36, 36, 62))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(255, 153, 102), rgb(255, 94, 98))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(128, 128, 128), rgb(63, 173, 168))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(233, 100, 67), rgb(144, 78, 149))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(255, 75, 31), rgb(255, 144, 104))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor: "#062A77",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(241, 39, 17), rgb(245, 175, 25))",
//     color: "#FFFFFF",
//   },
//   {
//     backgroundColor:
//       "linear-gradient(135deg, rgb(195, 20, 50), rgb(36, 11, 54))",
//     color: "#FFFFFF",
//   },
// ];

export default function Footer({ item, ind }) {
  function getRandomColor() {
    var letters = "BCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  function getDarkColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }

  let clr = getRandomColor();
  let x = getDarkColor();
  return (
    <div className="quiz_card" key={item._id} style={{ background: clr }}>
      <Link to={`/quiz/levels/${item._id}`} className="card_content">
        <img src={LOGO} className="category_card_img" alt="" />
        <h2 className="card_text" style={{ color: x }}>
          {item.name}
        </h2>
      </Link>
    </div>
  );
}
