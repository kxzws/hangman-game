import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  padding: 28px 32px 24px;
  width: 100%;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 214px;
    height: 10px;
    border-top: 2px solid #171717;
    border-radius: 52% 48% 45% 55%;
    transform: translateX(-50%) rotate(-1deg);
  }
`;

export const TitleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  column-gap: 12px;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
`;

export const PencilIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: none;
  stroke: #171717;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  transform: rotate(-6deg);
`;
