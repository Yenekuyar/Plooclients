import { IImage } from "./image.types";
import { StyledImage } from "./image.styles";

export default function Image(props: IImage) {
  return <StyledImage src={props.image} alt={props.alt} width={props.width} />;
}
