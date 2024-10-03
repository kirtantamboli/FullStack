import React from 'react'
//dynamic routing
function product({params}){
    console.log(params);
    
  return (
    <div> product{params.productid}</div>
  )
}

export default product 