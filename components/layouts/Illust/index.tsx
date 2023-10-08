import { useEffect, useState } from "react";
import styled from "styled-components";

//styles
const Main = styled.div`
  width: 100%;
  height:100%;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height:100%;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    object-fit: cover;
  }
`;
const Base = styled.div`
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
const OverLay = styled.div`
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  transform: scale(1);
  transition: all 3s ease;
  &.isAnim {
    opacity: 0.8;
    transform: scale(0.995);
  }
`;

const Illust = () => {
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
        <Img src="images/top__overlay.png" alt="" />
      </OverLay>
      <Base>
        <Img src="images/top.png" alt="" />
      </Base>
    </Main>
  );
};

export default Illust;
