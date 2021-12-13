

const BoxInfo = ({icon,bacGroundColor,title,number}) => {
    return (
        <div>
            <div className="box_info" style={{background:bacGroundColor}}>
                                <span>{title}</span>
                                <span style={{float:'right' , fontSize:'22px', marginTop:'-10px'}}>
                                 {icon }
                                </span>
                                <div className="bold">{number}</div>
                                <div className="line"></div>
                                <div className="center">View All</div>
                            </div>
        </div>
    )
}

export default BoxInfo
