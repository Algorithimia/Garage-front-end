const Login_type =({ title,p , button_text , logo_url , background_color})=>{
    return(
        <>
         <div className='login_type' style={{backgroundColor:background_color}}>
             <div className='login_logo'>
                 <img src={logo_url}/>
             </div>
             <h4>{title}</h4>
             <p>{p}</p>
             <button>{button_text}</button>


         </div>
        </>
    )
}
export default Login_type