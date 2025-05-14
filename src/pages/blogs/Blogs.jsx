import React from "react";
import { Link } from "react-router";

const Blogs = () => {
   return (
      <ul>
         {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>
               <Link to={`/blogs/${i + 1}`}>Blog {i + 1}</Link>
            </li>
         ))}
      </ul>
   );
};

export default Blogs;
