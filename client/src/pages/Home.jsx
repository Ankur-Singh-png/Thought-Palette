import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios  from "axios";

const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search
  

  useEffect(()=> {
    const fetchData =async ()=>{
      try{
        const res =await axios.get(`/posts${cat}`)
        setPosts(res.data)
      }
      catch(err){
        console.log(err)
      }
    };
    fetchData();
  },[cat])

//   const posts = [
//   {
//     id:1,
//     title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//     img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
//   },
//   {
//     id:2,
//     title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//     img: "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
//   },
//   {
//     id:3,
//     title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//     img: "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
//   },
//   {
//     id:4,
//     title: "Laboris dolore ut magna pariatur ad elit ea consequat ad enim.",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt",
//     img: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
//   },
// ];

const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

return (
  <div className="home">
    <div className="posts">
      {
        posts.map((post) => (
          <div className= "post" key={post.id}>

            <div className= "img">
              <img src= {`../upload/${post.img}`} alt=""/>
            </div>

            <div className="content">
               <Link className= "link" to={`/post/${post.id}`}>
                 <h1>{post.title}</h1>
               </Link>
               <p>{getText(post.desc)}</p>
                <button> Read More!!</button>
            </div>

          </div>
         ))
      }
    </div>
  </div>
  );
};

export default Home;
