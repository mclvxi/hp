import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, Fragment } from "react";
import styled from "styled-components";

//components
import Footer from "../components/layouts/Footer";
import Illust from "../components/layouts/Illust";
import Logo from "../components/layouts/Logo";
import Loading from "../components/Parts//Loading";
import DisplayIcon from "../components/elements/DisplayIcon";

const Home: NextPage = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;
  const Main = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    overflow: hidden;
  `;
  const Contents = styled.div`
    width: 100%;
    height: calc(100% - 2.8rem);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  `;
  const CoverBg = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      #3d4b6d 0%,
      #9cd0aa 35%,
      #7d96b5 61%,
      #795451 100%
    );
    mix-blend-mode: hard-light;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 10%;
    z-index: 2;
  `;
  const Bg = styled.div`
    width: 100%;
    height: 100%;
    background: #181818;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  `;
  const IllustLayer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  `;
  const LogoLayer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 28rem;
    z-index: 2;
  `;
  const IconLayer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 3rem 2rem;
    display: flex;
    flex-flow: column;
    gap: 1.3rem;
  `;

  //static
  const displayIcons = [
    {
      src: "images/displayIcon/twitterIcon.png",
      isArrow: true,
      href: "https://twitter.com/atuiringo",
    },
    {
      src: "images/displayIcon/nikoIcon.png",
      isArrow: true,
      href: "https://com.nicovideo.jp/community/co1926054",
    },
  ];

  //state
  const [loading, setLoading] = useState(false);

  //hooks
  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) return <Loading />;
  return (
    <>
      <Head>
        <title>MCLVXI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Main className="main">
          <Contents>
            <IllustLayer>
              <Illust></Illust>
            </IllustLayer>
            <LogoLayer>
              <Logo></Logo>
            </LogoLayer>
            <IconLayer>
              {displayIcons.map((_, i) => {
                return (
                  <Fragment key={i}>
                    <DisplayIcon
                      src={_.src}
                      isArrow={_.isArrow}
                      href={_.href}
                    />
                  </Fragment>
                );
              })}
            </IconLayer>
          </Contents>
          <Footer></Footer>
        </Main>
        <CoverBg></CoverBg>
        <Bg></Bg>
      </Container>
    </>
  );
};

export default Home;
