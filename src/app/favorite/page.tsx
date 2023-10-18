"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/svgs/Facebook.png";
import instagram from "../../../public/svgs/instagram.svg";
import youtube from "../../../public/svgs/youtube.svg";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const FavoritePage = () => {
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
        <p>Favorite</p>
        <p className={"rotate-180 scale-x-[-1] text-gray-800"}>Favorite</p>
        <Link
          className={
            "font-medium text-sm mt-4 hover:translate-y-2 transition-transform"
          }
          href={"/"}
        >
          {"<"} Back to home
        </Link>
      </section>
      <section
        className={
          "w-full bg-white h-full flex flex-col justify-center items-center"
        }
      >
        <div className="flex flex-row gap-24">
          <Link
            href={"https://www.facebook.com"}
            target={"_blank"}
            className={
              "flex flex-col items-center text-blue-500 hover:scale-110 transition-transform"
            }
          >
            <Image width={100} height={100} src={facebook} alt={"facebook"} />
            <p className={"font-bold"}>Facebook</p>
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.instagram.com"}
            className={
              "flex flex-col items-center text-pink-500 hover:scale-110 transition-transform"
            }
          >
            <Image width={100} height={100} src={instagram} alt={"instagram"} />
            <p className={"font-bold"}>Instagram</p>
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.youtube.com"}
            className={
              "flex flex-col items-center text-red-500 hover:scale-110 transition-transform"
            }
          >
            <Image width={100} height={100} src={youtube} alt={"youtube"} />
            <p className={"font-bold"}>Youtube</p>
          </Link>
        </div>
      </section>
    </motion.main>
  );
};

export default FavoritePage;
