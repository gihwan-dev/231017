"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const ResumePage = () => {
  return (
    <motion.main
      variants={variants}
      initial={"hidden"}
      animate={"enter"}
      transition={{ type: "linear" }}
      className={"w-screen h-screen bg-black overflow-hidden flex flex-fow"}
    >
      <section
        className={
          "w-3/5 h-full text-white flex items-center justify-center text-4xl flex-col font-bold"
        }
      >
        <p>Resume</p>
        <p className={"rotate-180 scale-x-[-1] text-gray-800"}>Resume</p>
        <Link
          className={
            "font-medium text-sm mt-4 hover:translate-y-2 transition-transform"
          }
          href={"/"}
        >
          {"<"} Back to home
        </Link>
      </section>
      <section className={"w-full bg-white h-full flex flex-col"}>
        <header className={"p-8 flex flex-col items-center gap-4 text-lg"}>
          <div className={"w-20 h-20 rounded-full border-2 border-black"}></div>
          <div>
            <p>
              성실하고 열심히하는 개발자 <strong>홍길동</strong> 입니다.
            </p>
          </div>
        </header>
        <section
          className={"w-full h-full flex flex-row border-t-2 border-t-black"}
        >
          <div className={"p-8 w-72 h-full flex flex-col gap-6"}>
            <div className={"flex flex-col gap-2"}>
              <div className={"w-full flex flex-row items-center gap-2"}>
                <p className={"whitespace-nowrap font-bold"}>개인정보</p>
                <div className={"w-full border border-black"}></div>
              </div>
              <div className={"flex flex-col text-sm gap-1"}>
                <p>이름: 홍길동</p>
                <p>생년 월일: 1998년 02월 21일</p>
                <p>번호: 010-1234-1234</p>
                <p>메일주소: email.gamil.com</p>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <div className={"w-full flex flex-row items-center gap-2"}>
                <p className={"whitespace-nowrap font-bold"}>자격증</p>
                <div className={"w-full border border-black"}></div>
              </div>
              <div className={"flex flex-col gap-2"}>
                <p className={"flex flex-row items-center gap-2 text-sm"}>
                  <span className={"text-gray-400"}>2020.12.12</span>
                  <span>한국사 자격증 1급</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              "flex-1 h-full border-l-2 border-l-gray-300 p-8 flex flex-col gap-6"
            }
          >
            <div className={"flex flex-col gap-2"}>
              <div className={"flex flex-row gap-2 items-center"}>
                <p className={"whitespace-nowrap font-bold"}>학력사항</p>
                <div className={"w-full border border-black"}></div>
              </div>
              <div className={"flex flex-col gap-1 text-sm px-8"}>
                <p className={"flex flex-row gap-2"}>
                  <span className={"text-gray-400"}>2020.12.10</span>
                  <span>고등학교 입학</span>
                </p>
                <p className={"flex flex-row gap-2"}>
                  <span className={"text-gray-400"}>2023.12.10</span>
                  <span>고등학교 졸업</span>
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <div className={"flex flex-row gap-2 items-center"}>
                <p className={"whitespace-nowrap font-bold"}>경력 정보</p>
                <div className={"w-full border border-black"}></div>
              </div>
              <div className={"flex flex-col gap-1 text-sm px-8"}>
                <p className={"flex flex-row gap-2"}>
                  <span className={"text-gray-400"}>2023.2.10</span>
                  <span>00 회사 개발자</span>
                </p>
              </div>
            </div>
            <div className={"flex flex-col gap-2"}>
              <div className={"flex flex-row gap-2 items-center"}>
                <p className={"whitespace-nowrap font-bold"}>수상 경력</p>
                <div className={"w-full border border-black"}></div>
              </div>
              <div className={"flex flex-col gap-1 text-sm px-8"}>
                <p className={"flex flex-row gap-2"}>
                  <span className={"text-gray-400"}>2020.12.10</span>
                  <span>독서 토론 대회 대상</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </motion.main>
  );
};

export default ResumePage;
