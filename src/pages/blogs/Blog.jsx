import React from "react";
import { useParams } from "react-router";

const Blog = () => {
   const { id } = useParams();
   return <div>Blog {id}</div>;
};

export default Blog;
