import styled from "styled-components";

export const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.pallete.primary.main2};
  border-radius: 15px;
  transition: 0.4s;
  transform: ${(props) =>
    props.checked ? "translateX(30px)" : "translateX(0)"};
`;