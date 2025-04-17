import React from 'react'
import data from '../apis/blog/getAPI'
const AllBlogs = () => {
  return (
    <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1
              className="text-center"
              style={{
                color: "#CB181D",
                fontSize: "28px",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            >
              Blogs
            </h1>
            <p>All Blogs</p>
          </div>
        </div>
        <div className="row">
        {data.map((item, index) => (
            <div className="col-md-4 mt-3" key={index}>
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
      </div>
    </div>
  )
}

export default AllBlogs
