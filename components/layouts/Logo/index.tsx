import { useEffect, useState } from "react";
import styled from "styled-components";

//styles
const illustWidth = "32rem";
const Main = styled.div`
  position: relative;
`;
const Base = styled.div`
  width: ${illustWidth};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const OverLay = styled.div`
  width: ${illustWidth};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  mix-blend-mode: hard-light;
  opacity: 1;
  transition: all 3s ease;
  &.isAnim {
    opacity: 0.3;
  }
`;
const Dummy = styled.div`
  width: ${illustWidth};
  opacity: 0;
`;
const Logo = () => {
  //state
  const [isAnim, setIsAnim] = useState(false);

  //util
  const update = () => {
    let count = 0;
    setIsAnim(true);
    setInterval(() => {
      if (count > 1) {
        count = 0;
      }
      count === 0 ? setIsAnim(true) : setIsAnim(false);
      count++;
    }, 3000);
  };

  //hooks
  useEffect(update, []);

  return (
    <Main>
      <OverLay className={`${isAnim ? "isAnim" : ""}`}>
        <img src="images/logoOverLay.png" alt="" />
      </OverLay>
      <Base>
        <img src="images/logo.png" alt="" />
      </Base>
      <Dummy>
        <img src="images/logo.png" alt="" />
      </Dummy>
    </Main>
  );
};

export default Logo;
