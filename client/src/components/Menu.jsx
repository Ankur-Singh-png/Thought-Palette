import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({category}) => {
  const [posts, setPosts] = useState([]);
  

  useEffect(()=> {
    const fetchData =async ()=>{
      try{
        const res =await axios.get(`/posts/?cat=${category}`);
        setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[category])

  
  return (
    <div className='menu'>
         <h1>Other posts you may like</h1>
         {
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))
         }
    </div>
  )
}

export default Menu




// const posts = [
//     {
//       id:1,
//       title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//       img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
//     },
//     {
//       id:2,
//       title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//       img: "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
//     },
//     {
//       id:3,
//       title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//       img: "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
//     },
//     {
//       id:4,
//       title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//       img: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
//     },
//   ];