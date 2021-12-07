import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'


import Landing_page from "./cycle_one/Landing_page/Landing_page";

const  App=() => {
  return (
    <>

<Router>
    

  

   
           <Routes>
                <Route path="/" element={<Landing_page />} exact />
                
               
            </Routes>
     </Router>       
     
    </>
  );
}

export default App;
