import { AiFillHeart } from "react-icons/ai";
import { HiShare} from "react-icons/hi";
import { MdModeComment } from "react-icons/md";


const SingleMovieCard = ({data}) => {
   
    const cardRightContainer ={
        width: '50%',
        height: '100%',
        backgroundImage: `linear-gradient(to left, rgba(255,0,0,0), rgba(13,13,13,1)),url(${data.poster2})`,
        backgroundPosition: 'inherit',
        backgroundRepeat: 'noRepeat',
        backgroundSize:'cover',
        objectFit: 'contain',
        borderRadius: '0 10px 10px 0'
    }

    return (
        <div className="card">
            <div className="cardLeftContainer">
                <div className="cardLeftHeaderContainer">
                    <div className="cardLeftHeaderLeftSection">
                        <img src={data.poster1} alt="movie_poster" />
                    </div>
                    <div className="cardLeftHeaderRightSection">
                        <h3 className="row">{data.title}</h3>
                        <div className="row">
                            <span >{data.releaseYear}</span>,
                            <span>{data.actor}</span>
                        </div>
                        <div className="row">
                            <span className="duration">{data.duration}</span>
                            <span>{data.type}</span>
                        </div>
                    </div>
                </div>
                
                <div className="cardLeftContainerBody">
                    <p>{data.description}</p>
                </div>
                <div className="cardLeftContainerFooter">
                    <p className="cardLeftContainerFooterIcon"><HiShare/></p>
                    <p className="cardLeftContainerFooterIcon"><AiFillHeart /></p>
                    <p className="cardLeftContainerFooterIcon"><MdModeComment/></p>
                </div>

               
            </div>
            <div style={cardRightContainer}>

            </div>
        </div>
    )
}

export default SingleMovieCard;