

const IconBox = ({icon,color}) => {
    return (
        <div className="icon_box" style={{color:color}}>
            {icon}
            <div className="text">search work orders</div>
        </div>
    )
}

export default IconBox
