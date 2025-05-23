import React, { useEffect, useState } from "react";

const FetchData = ({fetchData}) => {
 const [data,setData] = useState(null);
 useEffect(()=>{
   fetchData().then((data) => {
     setData(data);
});
 },[fetchData]);
  return (
  <div>
    {data ? (
      <>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </>
    ) : (
      'Loading...'
    )}
  </div>
);

}

export default FetchData;