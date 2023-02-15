import { useEffect, useState } from "react";
import styled from "styled-components";

//styles
const imageWidth = "32rem";
const Main = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Base = styled.div`
  max-width: ${imageWidth};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const OverLay = styled.div`
  max-width: ${imageWidth};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  mix-blend-mode: hard-light;
  opacity: 1;
  transform: scale(1);
  transition: all 3s ease;
  &.isAnim {
    opacity: 0.3;
    transform: scale(0.97);
  }
`;
const Center = styled.div`
  max-width: ${imageWidth};
  position: relative;
`;
const Dummy = styled.div`
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
      <Center>
        <OverLay className={`${isAnim ? "isAnim" : ""}`}>
          <img src="images/logoOverLay.png" alt="" />
        </OverLay>
        <Base>
          <img src="images/logo.png" alt="" />
        </Base>
        <Dummy>
          <img src="images/logo.png" alt="" />
        </Dummy>
      </Center>
    </Main>
  );
};

export default Logo;
