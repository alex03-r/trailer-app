import { useState } from 'react';

import '../reviews/style.css'
import data from './data.json'

export function ReviewsApp(){
    
  
    const [index, setIndex] = useState(0)
    const { img , name ,describtion ,job } = data[index]
    
      
    function onNext(){

        if(index >=  data.length - 1 ) return 0
       
        setIndex( index =>  index + 1)
    }

     function onBefore(){

        if(index <= 0)   return        
           
        setIndex(index => index - 1)
     }

     function onRamdon(){
          
        let randon = Math.floor( Math.random() *  3 ) + 1 ;
        console.log(randon)
        if(randon > 2) {
            return  setIndex(0);
        }
        setIndex(randon);
     }


    return (

     <div className=" main " >
            <h1>Reviews</h1>
            <div className=" cart ">     
                    <div className=' cart-info '>
                            <img src={img}  className="images" />
                            <div className='cart-info-details'>
                                <p className='mt-2 text-center mb-1 fw-bold'> {name} </p>
                                <p className='text-center mb-1'> {job} </p>
                                <p className='text-center ' > {describtion} </p>                               
                                <div className='d-flex justify-content-center '>
                                    <img className='img-move ' src='https://res.cloudinary.com/dlsc2062n/image/upload/v1662080487/heroes/aav8zdrrafh6cypqaozf.png'     onClick={ onBefore } />  
                                    <img className='img-move ms-4' src='https://res.cloudinary.com/dlsc2062n/image/upload/v1662080525/heroes/c2fwjpecncmyztqjpyja.png' onClick={ onNext }/>
                                </div>
                              <div className="text-center mt-3">  
                                <button className='btn btn-outline-primary w-25 ' onClick={ onRamdon }  >Randon</button>
                                </div>
                               
                            </div>
                    </div>
            </div>                       
     </div>
    )
}