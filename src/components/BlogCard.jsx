import React from 'react'

import {fontsColor} from '../assets/fonts/colors'
const BlogCard = ({title,description,image,author}) => {
  return (
    <>
      <div className="blog-card">
        <div className="blog-card-image">
          <img src={image} alt="Blog" />
        </div>
        <div className="blog-card-content">
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-description">{description}</p>
            <p className="blog-card-description" style={{color:fontsColor.black,fontSize:'12px'}}>{author}</p>
          <a href="#" className="blog-card-link">Read More</a>
        </div>
      </div>
      <style jsx>{`
        .blog-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .blog-card:hover {
          transform: scale(1.05);
        }
        .blog-card-image img {
          width: 100%;
          height: 200px;
        }
        .blog-card-content {
          padding: 16px;
        }
        .blog-card-title {
          font-size: 10px;
          margin-bottom: 8px;
        }
        .blog-card-description {
          font-size: 1rem;
          margin-bottom: 10px;
        }
        .blog-card-link {
          text-decoration: none;
          color:#ff6f61;
        }
      `}
      </style>
      <style>
        {`
          .blog-card {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .blog-card-image img {
            border-radius: 10px;
          }
          .blog-card-title {
            font-size: 1rem;
            font-weight: bold;
          }
          .blog-card-description {
            font-size: 1rem;
            color: #6c757d;
          }
        `}
      </style>
    <style>
        {`
          .blog-card-link {
            font-size: 1rem;
            color: #ff6f61;';
            text-decoration: none;
          }
          .blog-card-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
    <style>
        {`
          @media (max-width: 768px) {
            .blog-card {
              padding: 10px;
              margin-top: 20px;
              background-color: #f8f9fa;
            }
            .blog-card-title {
              font-size: 1.2rem;
            }
            .blog-card-description {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    <style>
        {`
          @media (max-width: 576px) {
            .blog-card {
              padding: 5px;
            }
            .blog-card-title {
              font-size: 1rem;
            }
            .blog-card-description {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default BlogCard
