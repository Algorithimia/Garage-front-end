import { Link } from "react-router-dom"


const BoxInfo = ({icon,bacGroundColor,title,number,path, view=true}) => {
    return (
        <div>
            <div className="box_info" style={{background:bacGroundColor}}>
                                <span>{title}</span>
                                <span style={{float:'right' , fontSize:'22px', marginTop:'-10px',marginTop:'-7px'}}>
                                 {icon }
                                </span>
                                <div className="bold">{number}</div>
                                {view && 
                                <>
                                  <div className="line"></div>
                                  <Link to={path} style={{textAlign:'center', margin:'auto',marginTop:'-7px'}} >  <div className="center">View All</div> </Link>
                                </>
                                }
                            </div>
        </div>
    )
}

export default BoxInfo
