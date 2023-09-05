import { StyledClientLink } from "./clientlink.styles";
import { IClientLink } from "./clientlink.types";

export default function ClientLink({ children, handleRowClick }: IClientLink) {
  return (
    <StyledClientLink onClick={handleRowClick}>
      <br />
      {children}
    </StyledClientLink>
  );
}
