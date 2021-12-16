import { Link } from "react-router-dom"


const BoxInfo = ({icon,bacGroundColor,title,number,path}) => {
    return (
        <div>
            <div className="box_info" style={{background:bacGroundColor}}>
                                <span>{title}</span>
                                <span style={{float:'right' , fontSize:'22px', marginTop:'-10px'}}>
                                 {icon }
                                </span>
                                <div className="bold">{number}</div>
                                <div className="line"></div>
                              <Link to={path} style={{textAlign:'center', margin:'auto'}} >  <div className="center">View All</div> </Link>
                            </div>
        </div>
    )
}

export default BoxInfo
