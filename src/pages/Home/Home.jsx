import React,{ useState,useEffect} from 'react';



const Home = () => {
  const[fake,setFake]=useState([]);
  useEffect(()=>{
    fakestore();
  },[])


  const fakestore = async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const jsonData=await response.json();
    setFake(jsonData);
  }
  fakestore();
  return (
   <>
   <h2>Online Store</h2>
   <div className="container">
    {fake.map((values)=>{
      return(
        <>
        <div className="box">
          <div className="content">
            <h5>{values.title}</h5>
            
            </div>
            <img src={values.image} alt="" />
            <p>{values.price}</p>
              
            </div>
        </>
      )
    })}
   </div>
   
   
   
   </>
  )
}

export default Home;
