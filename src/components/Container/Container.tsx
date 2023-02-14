import styled from "styled-components";
import { IcontainerProps } from "../../types/ContainerTypes";

export const Container = styled.div<IcontainerProps>`

  display: flex;
  align-items: ${({horizontalDirection}) => horizontalDirection};
  flex-direction: ${({ verticalDirection }) => verticalDirection};
  gap: ${({ gap }) => `${gap ?? 0}rem`};
  padding: ${({ top, bottom, left, right }) => `${top ?? 0}rem ${right ?? 0}rem ${bottom ?? 0}rem ${left ?? 0}rem`} ;
  width: 100%;
  height: 100% ;

`