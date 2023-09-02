import { IImage } from "./image.props"
import { StyledImage } from "./image.styles"

export const Image = ({ image, alt, width }: IImage) => {
    return (
        <StyledImage src={image} alt={alt} width={width}/>
    )
}