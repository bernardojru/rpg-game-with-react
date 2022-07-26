import styled from "styled-components";

export const Container = styled.div<{
  top: number;
  left: number;
  size: number;
  sidePos: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background: url("/assets/char.png") 0px ${props => props.sidePos}px;
`;
