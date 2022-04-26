import { Link } from "react-router-dom"


const Grage_option =({title,p,link})=>{
    return(
        <>
         <div className="grage_option">
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{p}</p>
            <Link to={link}> <button className="light_button">Learn More</button></Link>
         </div>
         </>
    )
}
export default Grage_option