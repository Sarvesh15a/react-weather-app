import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



const Home = () => {

    
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          
          const res = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20');
          const data = await res.json();
          if (!res.ok) {
             console.log(error)
            return;
          }
          if (res.ok) {
            setPost(data);
          }
        } catch (error) {
         console.log(error)
        }
      };
      fetchPost();
    }, []);

console.log(post.results)

  return (
    <div className="overflow-x-auto">
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">TimeZone</th>
        </tr>
      </thead>
      <thead>
      </thead>
      
    </table>
  </div>

  )
}

export default Home