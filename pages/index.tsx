import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, Fragment } from "react";

//style
import Styles from "./style";

//components
import Footer from "../components/layouts/Footer";
import Illust from "../components/layouts/Illust";
// import Logo from "../components/layouts/Logo";
import Loading from "../components/Parts//Loading";
import DisplayIcon from "../components/elements/DisplayIcon";

const Home: NextPage = () => {

  const displayIcons = [
    {
        "src": "images/displayIcon/twitterIcon.png",
        "isArrow": true,
        "href": "https://twitter.com/atuiringo"
      },
      {
        "src": "images/displayIcon/nikoIcon.png",
        "isArrow": true,
        "href": "https://com.nicovideo.jp/community/co1926054"
      },
      {
        "src": "images/displayIcon/pixivIcon.png",
        "isArrow": true,
        "href": "https://www.pixiv.net/users/3279399"
      },
      {
        "src": "images/displayIcon/soundCloudIcon.png",
        "isArrow": true,
        "href": "https://soundcloud.com/iyha_mclvxi"
      }
]
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
      <Styles.Container>
        <Styles.Main className="main">
          <Styles.Contents>
            <Styles.IllustLayer>
              <Illust></Illust>
            </Styles.IllustLayer>
            {/* <Styles.LogoLayer>
              <Logo></Logo>
            </Styles.LogoLayer> */}
            <Styles.IconLayer>
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
            </Styles.IconLayer>
          </Styles.Contents>
          <Footer></Footer>
        </Styles.Main>
        <Styles.CoverBg></Styles.CoverBg>
        <Styles.Bg></Styles.Bg>
      </Styles.Container>
    </>
  );
};

export default Home;
