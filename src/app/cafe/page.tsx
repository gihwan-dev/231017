import Image from "next/image";
import ice from "../../../public/imges/ice.jpg";
import header from "../../../public/imges/header.jpg";
import coffee from "../../../public/imges/coffee.jpg";
import map from "../../../public/imges/map.jpg";

const CafePage = () => {
  return (
    <div id="container" className={"flex flex-col"}>
      <header>
        <ul
          className={
            "bg-black flex flex-row text-white p-4 justify-center gap-4 text-sm"
          }
        >
          <li>카페소개</li>
          <li>오시는 길</li>
          <li>이달의 추천</li>
          <li id="home">
            <a href="/">홈페이지</a>
          </li>
        </ul>
      </header>
      <div id="title" className={"w-full h-80 relative"}>
        <Image src={header} alt={"header"} fill={true} />
      </div>
      <main id="main" className={"flex flex-col"}>
        <div id={"top-content"} className={"md:flex md:flex-row lg:flex-col"}>
          <div
            id="intro"
            className={
              "p-4 flex flex-col gap-2 bg-amber-100 bg-opacity-30 md:p-8 md:flex-1 lg:items-start lg:px-40"
            }
          >
            <h2 className={"font-bold text-2xl lg:self-start"}>카페소개</h2>
            <div className={"flex flex-row gap-4"}>
              <Image
                alt={"coffee"}
                src={coffee}
                id="coffee"
                className={"hidden lg:inline"}
              ></Image>
              <div id="content1" className={"pl-4 flex-1"}>
                <p>영업 시간: 오전 9시 ~ 밤 10시</p>
                <p>
                  휴무: 매주 수요일
                  <em>(수요일이 공휴일인 경우 수요일 영업, 다음날 휴무)</em>
                </p>
              </div>
            </div>
          </div>

          <div
            id="road"
            className={
              "flex flex-col gap-2 p-4 md:p-8 md:flex-1 lg:items-start lg:px-40"
            }
          >
            <h2 className={"font-bold text-2xl lg:self-start"}>오시는길</h2>
            <div className={"md:flex md:flex-row gap-4"}>
              <Image src={map} alt={"map"} />
              <div id="content2" className={"pl-4"}>
                <p>서귀포시 안덕면 사계리 000-000</p>
                <p>제주 올레 10코스 산방산 근처</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="recommend"
          className={
            "flex flex-col p-4 gap-4 bg-amber-100 bg-opacity-30 md:p-8 lg:items-center lg:px-40"
          }
        >
          <h2 className={"font-bold text-2xl lg:self-start"}>이달의 추천</h2>
          <div className={"flex flex-row gap-8"}>
            <div id="content3">
              <h3 className={"font-bold text-xl pl-4"}>핸드드립 아이스 커피</h3>
              <div className={"pl-8"}>
                <p>
                  1. 1인분 기준으로 서버에 각 얼음 5조각(한조각은 20cc)넣고
                  추출을 시작한다.
                </p>
                <p>
                  2. 평상시 보다 원두의 양은 2배정도(20g)와 추출액은 얼음
                  포함해서 200cc까지 내린다.
                </p>
                <p>3. 아이스 잔에 얼음 6~7개 섞어서 시원하게 마신다.</p>
              </div>
            </div>
            <Image
              width={320}
              height={225}
              src={ice}
              alt="얼음 사진"
              className={"hidden lg:inline"}
            />
          </div>
        </div>
      </main>
      <footer
        className={
          "p-4 flex flex-row items-center justify-center bg-black text-white font-bold"
        }
        id="footer"
      >
        <p>My times with Coffee</p>
      </footer>
    </div>
  );
};

export default CafePage;
