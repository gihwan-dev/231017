"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const NewsPage = () => {
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
        <p>News</p>
        <p className={"rotate-180 scale-x-[-1] text-gray-800"}>News</p>
        <Link
          className={
            "font-medium text-sm mt-4 hover:translate-y-2 transition-transform"
          }
          href={"/"}
        >
          {"<"} Back to home
        </Link>
      </section>
      <section className={"w-full bg-white h-full flex flex-col p-12 gap-8"}>
        <Link
          href={
            "https://n.news.naver.com/mnews/hotissue/article/018/0005598302?type=series&cid=1089130"
          }
          className={"flex flex-row gap-2"}
        >
          <Image
            fill={false}
            height={160}
            width={160}
            src={
              "https://imgnews.pstatic.net/image/018/2023/10/18/0005598302_001_20231018000405973.jpg?type=w647"
            }
            alt={"image"}
          />
          <div className={"flex flex-col justify-between"}>
            <p className={"font-bold"}>
              {'"학폭 가해자가 경찰이 되다니..."'} [그해 오늘]
            </p>
            <p>
              [이데일리 박지혜 기자] “학교폭력 범죄자가 경찰이 되는 것을
              막아주세요!” 2020년 10월 18일 청와대 홈페이지 국민청원 게시판에 이
              같은 제목의 글이 올라온 사실이 알려졌다.
            </p>
            <p className={"text-xs text-gray-400 self-end"}>
              입력2023.10.18. 오전 12:04
            </p>
          </div>
        </Link>
        <Link
          href={
            "https://n.news.naver.com/mnews/hotissue/article/018/0005597537?type=series&cid=1089130"
          }
          className={"flex flex-row gap-2"}
        >
          <Image
            fill={false}
            height={160}
            width={160}
            src={
              "https://imgnews.pstatic.net/image/018/2023/10/17/0005597537_001_20231017000201066.jpg?type=w647"
            }
            alt={"image"}
          />
          <div className={"flex flex-col justify-between"}>
            <p className={"font-bold"}>
              직장 선배 약혼녀 성폭행하려다 살해한 전과범[그해 오늘]
            </p>
            <p>
              [이데일리 이준혁 기자] 2019년 10월 17일 광주지방법원 순천지원
              제1형사부는 성폭력범죄의 처벌 등에 관한 법률 위반 등으로 구속
              기소된 남성 정모(당시 36세)씨에게 무기징역을 선고했다. 직장 선배
              약혼녀를 성폭행하려다 살해한 혐의였다.
            </p>
            <p className={"text-xs text-gray-400 self-end"}>
              입력2023.10.17. 오전 12:02
            </p>
          </div>
        </Link>
      </section>
    </motion.main>
  );
};

export default NewsPage;
