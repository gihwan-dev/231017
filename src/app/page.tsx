import Link from "next/link";

export default function Home() {
  return (
    <main
      className={
        "bg-black w-screen h-screen overflow-hidden flex flex-row items-center justify-center gap-48"
      }
    >
      <nav
        className={
          "fixed top-0 right-0 flex flex-row gap-8 text-white font-semibold p-4"
        }
      >
        <Link href={"/"}>Sign In</Link>
        <Link href={"/"}>Sign Up</Link>
      </nav>
      <div>
        <p className={"text-7xl text-white font-bold"}>KMK</p>
        <p
          className={
            "text-7xl font-bold rotate-180 transform scale-x-[-1] text-gray-800"
          }
        >
          KMK
        </p>
      </div>
      <div className={"text-white text-2xl font-bold"}>
        <div className={"w-32 h-full"}></div>
        <div className={"flex flex-col gap-32"}>
          <Link href={"/"}>Resume {">"}</Link>
          <Link href={"/"}>News {">"}</Link>
          <Link href={"/"}>Favorite {">"}</Link>
        </div>
      </div>
    </main>
  );
}
