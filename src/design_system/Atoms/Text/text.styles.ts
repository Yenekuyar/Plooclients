import styled from "styled-components";
import { ISTextProps } from "./text.types";

export const StyledText = styled.p<ISTextProps>`
  font-size: 16px;
  text-align: center;
  padding: 2px;
  border: ${(props) =>
    props.contentEditable
      ? `2px solid` + props.theme.pallete.primary.main
      : ""};
`;