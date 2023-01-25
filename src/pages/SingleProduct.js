import { useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";
function SingleProduct() { 
  const [data, setdata] = useState('');
 const {id}= useParams();
 const  getSingleProduct = async ()=>{
  try{
        let prod = await axios(`https://dummyjson.com/products/${id}`)
         setdata(prod.data)
      }catch(err){
    console.log(err)
  }
}
 useEffect(()=>{
  getSingleProduct()
  }, []);

  return (
    <>
    {data ?
    <div className="one">
    <img src ={data.images.length > 0 ? data. images[2] : data. thumbnail}/>
    <p>
      price: {data.tittle}
    Rating:{data.rating}
    </p>
    <p>
      Description:{data.description}
    </p>
    <button className="yes">Add to cart</button>
    <button className="yes">Review</button>
    <br/>
    <br/>

    <div className="three">
    <img src={data.images > 0 ? data.images[0]: data.thumbnail}/>
    <img src={data.images > 0 ? data.images[1]: data.thumbnail}/>
    <img src={data.images > 0 ? data.images[2]: data.thumbnail}/>

    </div>
    
   </div> : "Loading...."}
   {

   }
   </>
  )
}

export default SingleProduct