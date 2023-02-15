import styled from "styled-components";
import { IcontainerProps } from "../../types/ContainerTypes";

const paddingConfig = ({
  padding, top, bottom, left, right
}: IcontainerProps) => padding
    ? `${padding}rem`
    : (`${top ?? 0}rem ${right ?? 0}rem ${bottom ?? 0}rem ${left ?? 0}rem`)

export const Container = styled.div<IcontainerProps>`

  display: flex;
  align-items: ${({ horizontalDirection }) => horizontalDirection};
  flex-direction: ${({ verticalDirection }) => verticalDirection};
  justify-content: ${({ justify }) => justify};
  padding: ${paddingConfig};
  gap: ${({ gap }) => `${gap ?? 0}rem`};
  border: ${({ border, colorBorder }) => border ? `1px solid ${colorBorder ?? 'grey'}` : 'none'};
  border-radius: ${({ radius }) => radius ? `${radius}rem` : 0};
  background-color: ${({ theme, bgColor }) => bgColor ? theme.primary.contrast : ''};
  width: 100%;
  height: 100%;
`