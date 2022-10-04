import React from 'react'

export const Card = ({data, deleteCard}) => {
  return (
   <>
   <article className='row'>

    {

      data.map((color, i) =>{
        return (
          <div className='card col-12 col-md-4 col-lg-4 mx-3 my-4 widthCard' key={i}>
            <div className='card-body d-flex justify-content-between'>
              <input type="color" value={color.color} disabled/>
              <h5 className='card-title'> {color.textColor}</h5>
              <button onClick={() => deleteCard(color)}>✖</button>
            </div>
          </div>
        );
      })
    }

    </article>
   </>
  )
}
