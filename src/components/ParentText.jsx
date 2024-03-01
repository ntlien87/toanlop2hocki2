// "use client";

// import { useState } from "react";

// const scoreColor = (score) => {
//   if (score === 10) {
//     return "text-red-500 animate-ping";
//   } else if (score === 9) {
//     return "text-red-500";
//   } else if (score >= 7) {
//     return "text-green-500";
//   } else if (score >= 5) {
//     return "text-yellow-500";
//   } else if (score < 5) {
//     return "text-purple-500";
//   }
// };

// const ParentText = () => {
//   const [score, setScore] = useState("");

//   const updateScore = (newsScore) => {
//     setScore(newsScore);
//   };

//   const getScoreColor = scoreColor(score);

//   return (
//     <div className="w-full flex flex-col items-center">
//       <div className="font-semibold text-2xl sm:text-3xl text-center mb-8  ">
//         Điểm:
//         <div
//           className={`ml-4 inline-block  font-bold text-3xl sm:text-4xl md:text-5xl mr-4 ${getScoreColor}`}
//         >
//           {score}
//         </div>
//         <div className={` inline-block text-2xl sm:text-3xl`}>
//           {score === 10 ? "🎉" : ""}
//         </div>
//       </div>
//       <div>
//         {/* <De6 /> */}
//         <De5 />
//       </div>
//     </div>
//   );
// };
// export default ParentText;
