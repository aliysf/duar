import {IImage} from "../api";

const CardPhoto = ({image}:{image:IImage}) => {
    return (
        <img src={image.url} alt={image.title}/>
    );
};

export default CardPhoto;