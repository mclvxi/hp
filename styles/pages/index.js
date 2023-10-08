import styled from "styled-components";

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
    /* background: linear-gradient(
      360deg,
      #3d4b6d 0%,
      #9cd0aa 35%,
      #7d96b5 61%,
      #795451 100%
    ); */
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  `;
  const LogoLayer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 33rem;
    z-index: 2;
    @media screen and (max-width: 480px) {
      top: 29.8rem;
    }
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

  export default {
    Container,Main,Contents,CoverBg,Bg,IllustLayer,LogoLayer,IconLayer
  }