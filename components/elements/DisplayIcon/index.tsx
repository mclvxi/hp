import styled from "styled-components";
import Link from "next/link";

//styles
const Main = styled.div`
  position: relative;
`;
const Icon = styled.div`
  width: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
const Arrow = styled.div`
  width: 0.8rem;
  position: absolute;
  z-index: 2;
  bottom: -0.3rem;
  left: -0.3rem;
`;

type Props = {
  src: string;
  href?: string;
  isArrow?: boolean;
};

const DisplayIcon: React.FC<Props> = ({ src, isArrow, href }) => {
  const ArrowRender = () => {
    return (
      <Arrow>
        <img src="images/shortArrowIcon.png" alt="" />
      </Arrow>
    );
  };
  const IconRender = () => {
    return (
      <Icon>
        <>
          <img src={src} alt="" />
          {isArrow && ArrowRender()}
        </>
      </Icon>
    );
  };
  return (
    <Main>
      <>
        {href ? (
          <Link href={href} target="_blank">
            {IconRender()}
          </Link>
        ) : (
          IconRender()
        )}
      </>
    </Main>
  );
};

export default DisplayIcon;
