import React from "react";
import BlogCard from "../components/BlogCard";
import '../styles/blogs.css'
import data from "../apis/blog/getAPI";
import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Blog = () => {
  const firstThreeBlogs = data.slice(0, 3);
  return (
    <>
    <div className="blogs">
    <div className="container">
        <div className="row">
          <div className="col">
            <h1
              className="text-center"
              style={{
                color: "#ff6f61",
                fontSize: "28px",
                marginTop: "20px",
                marginBottom: "9px",
              }}
            >
              Blogs
            </h1>
            <h1 className="text-center" style={{fontSize:'2.5rem',marginBottom:'30px'}}>Recent Posts</h1>
            
          </div>
        </div>
        <div className="row">
          {firstThreeBlogs.map((item, index) => (
            <div className="col-md-4" key={index}>
              <BlogCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                author={item.author}
              />
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
           
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Blog;
