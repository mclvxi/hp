import styled from "styled-components";
import { useEffect, useState } from "react";
import zeroPadding from "../../../util/zeroPadding";

const Footer = () => {
  //style
  const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2.8rem;
    background: #181818;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: 0px 0px 17px #0b0b0b;
  `;
  const StartIcon = styled.div`
    width: 1.2rem;
  `;
  const Border = styled.div`
    width: 0.1rem;
    height: 1.8rem;
    background: #2d2d2d;
  `;

  const SIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.2rem;
  `;

  const RightMenuWrapper = styled.div`
    padding: 0.7rem 1.2rem;
    background: #0c0c0c;
    display: flex;
    align-items: center;
  `;
  const FooterArrowIcon = styled.div`
    width: 1.2rem;
    position: relative;
    left: -1.7rem;
  `;
  const TimeText = styled.div`
    font-size: 0.5rem;
    height: 1rem;
  `;

  //store
  const [time, setTime] = useState("00:00");

  //compute
  const generateTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour}:${zeroPadding(minutes, 2)}`;
  };

  const update = () => {
    const id = setInterval(() => {
      setTime(generateTime());
    }, 500);
  };

  //hooks
  useEffect(update, []);

  return (
    <Main>
      <SIconWrapper>
        <StartIcon>
          <img src="images/sIcon.png" alt="" />
        </StartIcon>
        <Border></Border>
      </SIconWrapper>
      <RightMenuWrapper>
        <FooterArrowIcon>
          <img src="images/footerArrow.png" alt="" />
        </FooterArrowIcon>
        <TimeText>{time}</TimeText>
      </RightMenuWrapper>
    </Main>
  );
};

export default Footer;
