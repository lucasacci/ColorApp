import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Form = () => {
  
  const [color, setColor] = useState("#000000")
  const [textColor, setTextColor] = useState("")

   const dataLS = JSON.parse(localStorage.getItem("data")) || [];
  
  const [data, setData] = useState(dataLS);

  useEffect(() => {
    
    localStorage.setItem("data", JSON.stringify(data));

  }, [data]);
  
  console.log(data);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newColor = {
      color: color,
      textColor: textColor
    }

    setData([...data, newColor]);
    setColor("");
    setTextColor("");
  
  }

  const deleteCard = (nombre) =>{

    console.log(nombre);

    let nuevoArray = data.filter((x) => x.color !== nombre.color);

    setData(nuevoArray);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row  d-flex align-items-center  justify-content-center p-1">
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
            <input
              type="color"
              className="form-control divColor col-12 col-md-6 col-lg-9"
              onChange={(e) =>  setColor(e.target.value)}
              value={color}
              required
              minLength={2}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <label className="form-label  ">Ingrese un color</label>
            <input
              type="text"
              onChange={(e)=> setTextColor(e.target.value)}
              value={textColor}
              className="form-control my-2"
              placeholder="Black"
              required
            />
            <button type="submit" className="btn btn-primary button1">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Card data={data} deleteCard={deleteCard}/>
    </>
  );
};
