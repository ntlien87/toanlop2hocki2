"use client";

import { useState } from "react";

import { questions_1 } from "@/libs/lop2/ki2/data";
import Image from "next/image";
import Link from "next/link";

const scoreColor = (score) => {
  if (score === 10) {
    return "text-red-500 animate-ping";
  } else if (score === 9) {
    return "text-red-500";
  } else if (score >= 7) {
    return "text-green-500";
  } else if (score >= 5) {
    return "text-yellow-500";
  } else if (score < 5) {
    return "text-purple-500";
  }
};

const De1 = () => {
  const [score, setScore] = useState("");

  const updateScore = (newsScore) => {
    setScore(newsScore);
  };

  const getScoreColor = scoreColor(score);

  const getResult = async (formData) => {
    let score = 0;

    const {
      ans_1,
      ans_2,
      ans_3,
      ans_4,
      ans_5,
      ans_6,
      ans_7,
      ans_8,
      ans_9,
      ans_10,
    } = Object.fromEntries(formData);

    if (ans_1 === questions_1[0].dap_an_dung) {
      score += 1;
    }
    if (ans_2 === questions_1[1].dap_an_dung) {
      score += 1;
    }
    if (ans_3 === questions_1[2].dap_an_dung) {
      score += 1;
    }
    if (ans_4 === questions_1[3].dap_an_dung) {
      score += 1;
    }
    if (ans_5 === questions_1[4].dap_an_dung) {
      score += 1;
    }
    if (ans_6 === questions_1[5].dap_an_dung) {
      score += 1;
    }
    if (ans_7 === questions_1[6].dap_an_dung) {
      score += 1;
    }
    if (ans_8 === questions_1[7].dap_an_dung) {
      score += 1;
    }
    if (ans_9 === questions_1[8].dap_an_dung) {
      score += 1;
    }
    if (ans_10 === questions_1[9].dap_an_dung) {
      score += 1;
    }

    updateScore(score);
  };

  return (
    <>
      <Link
        href={"/"}
        className="underline italic text-teal-600 font-semibold hover:text-teal-400 transition-colors"
      >
        Về Trang Chủ{" "}
      </Link>
      <div className="w-full flex flex-col items-center">
        <div className="font-semibold text-2xl sm:text-3xl text-center mb-8  ">
          Điểm:
          <div
            className={`ml-4 inline-block  font-bold text-3xl sm:text-4xl md:text-5xl mr-4 ${getScoreColor}`}
          >
            {score}
          </div>
          <div className={` inline-block text-2xl sm:text-3xl`}>
            {score === 10 ? "🎉" : ""}
          </div>
        </div>
      </div>
      <form action={getResult} className="flex flex-col gap-6 max-w-3xl pb-8">
        {questions_1.map((q) => {
          return (
            <div key={q.id} className="flex flex-col gap-2">
              <p className="font-bold text-lg sm:text-xl">
                Câu {q.id}: {q.noi_dung}
              </p>

              {q.hinh_anh && (
                <div className="relative w-[300px] h-[200px] ">
                  <Image
                    src={q.hinh_anh}
                    alt={q.noi_dung}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-x-8 ml-6 font-medium sm:text-lg">
                <label className="flex gap-1 items-center gap-y-1">
                  <input
                    type="radio"
                    name={`ans_${q.id}`}
                    value={q.cac_dap_an[0]}
                  />
                  <span>{q.cac_dap_an[0]}</span>
                </label>
                <label className="flex gap-1 items-center gap-y-1">
                  <input
                    type="radio"
                    name={`ans_${q.id}`}
                    value={q.cac_dap_an[1]}
                  />
                  <span>{q.cac_dap_an[1]}</span>
                </label>
                <label className="flex gap-1 items-center gap-y-1">
                  <input
                    type="radio"
                    name={`ans_${q.id}`}
                    value={q.cac_dap_an[2]}
                  />
                  <span>{q.cac_dap_an[2]}</span>
                </label>
                <label className="flex gap-1 items-center gap-y-1">
                  <input
                    type="radio"
                    name={`ans_${q.id}`}
                    value={q.cac_dap_an[3]}
                  />
                  <span>{q.cac_dap_an[3]}</span>
                </label>
              </div>
            </div>
          );
        })}

        <button
          type="submit"
          className="w-full md:w-3/4 max-w-md  py-3 border-2 border-teal-500 mx-auto rounded-full text-lg font-bold hover:bg-white transition-colors"
        >
          Trả Lời
        </button>
      </form>
    </>
  );
};
export default De1;
