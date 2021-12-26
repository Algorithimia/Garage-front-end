

const IconBox = ({icon,color, text}) => {
    return (
        <div className="icon_box"  style={{color:color}}>
            {icon}
            <div className="text">{text}</div>
        </div>
    )
}

export default IconBox
