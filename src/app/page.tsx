"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useMousePosition from "@/utils/useMousePosition";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <motion.main
      variants={variants}
      initial={"hidden"}
      animate={"enter"}
      transition={{ type: "linear" }}
      className={
        "bg-black w-screen h-screen overflow-hidden flex flex-row items-center justify-center gap-48"
      }
    >
      <motion.div
        className={`circle w-16 h-16 bg-transparent rounded-full absolute top-0 left-0 border-3 border-gray-500 z-10`}
        animate={{
          x: x - 32,
          y: y - 32,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      ></motion.div>
      <nav
        className={
          "fixed top-0 right-0 flex flex-row gap-8 text-white font-semibold p-4 z-20"
        }
      >
        <Link href={"/signIn"}>Sign In</Link>
        <Link href={"/signUp"}>Sign Up</Link>
      </nav>
      <div>
        <p className={"text-7xl text-white font-bold z-20"}>KMK</p>
        <p
          className={
            "text-7xl font-bold rotate-180 transform scale-x-[-1] text-gray-800 z-20"
          }
        >
          KMK
        </p>
      </div>
      <div className={"text-white text-2xl font-bold z-20"}>
        <div className={"w-32 h-full"}></div>
        <div className={"flex flex-col gap-32"}>
          <Link
            className={"hover:translate-x-4 transition-transform"}
            href={"/resume"}
          >
            Resume {">"}
          </Link>
          <Link
            className={"hover:translate-x-4 transition-transform"}
            href={"/news"}
          >
            News {">"}
          </Link>
          <Link
            className={"hover:translate-x-4 transition-transform"}
            href={"/favorite"}
          >
            Favorite {">"}
          </Link>
          <Link
            className={"hover:translate-x-4 transition-transform"}
            href={"/cafe"}
          >
            Cafe {">"}
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
