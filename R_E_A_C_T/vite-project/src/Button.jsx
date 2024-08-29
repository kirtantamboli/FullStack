//rfce = for normal function component
//rafce = for arrow function component
//props = props are used to share data from parent component to child component 
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
