import { StyledToggleButton } from "./toggleButton.styles";
import { HiddenInput } from "../../Atoms/HiddenInput/hiddenInput.styles";
import { Slider } from "../../Atoms/Span/span.styles";
import { useState } from "react";
import { useTheme } from "../../../context/themeContext";

export default function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const { toggleTheme, theme } = useTheme();

  return (
    <StyledToggleButton>
      <HiddenInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        onClick={toggleTheme}
      />
      <Slider checked={isChecked} />
    </StyledToggleButton>
  );
}
