import Link from "next/link";

const SignUpPage = () => {
  return (
    <div
      className={"w-screen h-screen bg-black flex justify-center items-center"}
    >
      <form
        className={
          "w-11/12 p-8 border border-white rounded-lg flex flex-col gap-6 max-w-lg"
        }
      >
        <header className={"text-white font-bold text-lg"}>Sign in</header>
        <div className={"flex flex-col gap-2"}>
          <label className={"text-white font-bold"}>Email</label>
          <input
            type={"email"}
            className={
              "bg-transparent border border-white px-2 py-2 rounded-lg text-white"
            }
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <label className={"text-white font-bold"}>Password</label>
          <input
            className={
              "bg-transparent border border-white px-2 py-2 rounded-lg text-white"
            }
            type={"password"}
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <label className={"text-white font-bold"}>Confirm Password</label>
          <input
            className={
              "bg-transparent border border-white px-2 py-2 rounded-lg text-white"
            }
            type={"password"}
          />
        </div>
        <button
          className={
            "border border-white rounded-full text-white font-bold p-2"
          }
        >
          Sign in
        </button>
        <Link
          className={
            "border border-white rounded-full text-white font-bold p-2 text-center"
          }
          href={"/"}
        >
          Back to home
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
