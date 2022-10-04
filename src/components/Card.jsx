import React from 'react'

export const Card = ({arregloColores}) => {
  return (
   <>
    {
      arregloColores.map((color, i) =>{
        return (
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'> {color}</h5>
                <p></p>
                
            
            </div>
          </div>
        );
      })
    }

   </>
  )
}
