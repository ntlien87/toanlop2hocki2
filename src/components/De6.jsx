"use client";

import { useState } from "react";

import { questions_6 } from "@/libs/lop2/ki2/data_de6";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const De6 = () => {
  const pathName = usePathname();
  const ten_de = pathName.slice(3);

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

    if (ans_1.trim() === questions_6[0].dap_an_dung) {
      score += 1;
    }
    if (ans_2.trim() === questions_6[1].dap_an_dung) {
      score += 1;
    }
    if (ans_3.trim() === questions_6[2].dap_an_dung) {
      score += 1;
    }
    if (ans_4.trim() === questions_6[3].dap_an_dung) {
      score += 1;
    }
    if (ans_5.trim() === questions_6[4].dap_an_dung) {
      score += 1;
    }
    if (ans_6.trim() === questions_6[5].dap_an_dung) {
      score += 1;
    }
    if (ans_7.trim() === questions_6[6].dap_an_dung) {
      score += 1;
    }
    if (ans_8.trim() === questions_6[7].dap_an_dung) {
      score += 1;
    }
    if (ans_9.trim() === questions_6[8].dap_an_dung) {
      score += 1;
    }
    if (ans_10.trim() === questions_6[9].dap_an_dung) {
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
      <div className="text-lg sm:text-xl md:text-2xl font-bold underline text-teal-500 mb-4 rounded-md">
        Đề số {ten_de}
      </div>
      <form action={getResult} className="flex flex-col gap-6 max-w-3xl pb-8">
        {questions_6.map((q) => {
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
              <div className="ml-8">
                <input
                  type="text"
                  name={`ans_${q.id}`}
                  required
                  placeholder="Đáp án..."
                  className="px-4 py-2 outline-emerald-600 rounded-md w-[150px]"
                />
              </div>
              {/* <div className="flex flex-wrap gap-x-8 ml-6 font-medium sm:text-lg">
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
              </div> */}
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
export default De6;
