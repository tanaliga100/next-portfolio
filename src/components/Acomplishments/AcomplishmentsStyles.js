import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Boxes = styled.div`
  min-height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  max-width: 100%;
  gap: 15px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 10px;
    margin: 20px 0 32px;
    min-height: 350px;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 5px;
    max-width: 100%;
    flex-direction: column;

    margin: 24px auto;
    min-height: 350px;
  }
`;

export const Box = styled.div`
  background: #212d45;
  min-height: 360px;
  border-radius: 12px;
  flex: 1;
  margin: 2rem;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    min-height: 360px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 5rem;
    padding: 10rem;
    flex-direction: column;
    margin: 1rem;
    max-width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5rem;
    flex-direction: column;
    min-height: 10rem;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
