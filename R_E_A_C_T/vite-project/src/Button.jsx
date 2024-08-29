//rfce = for normal function component
//rafce =  
import React from 'react'
    function Button(props){
       console.log('props')
       return(
           <div>
              <button>
                {props.text}
              </button>
            </div>
            )
    }
export default Button
