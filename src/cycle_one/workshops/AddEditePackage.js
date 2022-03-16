import React from 'react'

const AddEditePackage = () => {
    return (
        <div className='add_edite'>
            <form>
                <div className='upload'
                    onClick={()=> document.getElementById("my_file").click()}>

                        <img src='/images/cycle one/img.png'/>
                        <span>UPLOAD PHOTOS</span>
                     </div>
        
                <input type="file" id="my_file" style={{display: "none"}} />

                <input type='text' placeholder='PACKAGE TITLE' />
                <input type='text' placeholder='PRICE' />

                <input className='btn' type='submit' value='SAVE DETAILS' />
            </form>
            
        </div>
    )
}

export default AddEditePackage
