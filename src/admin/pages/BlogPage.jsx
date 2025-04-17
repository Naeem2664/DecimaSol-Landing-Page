import { Table, Button, Badge } from "react-bootstrap";
import "../styles/blogs.css";
import data from "../../apis/blog/getAPI";
import { Link } from "react-router-dom";
const BlogPage = () => {
  console.log(data);
  const handleEdit = (id) => {
    console.log("Edit blog with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete blog with ID:", id);
  };

  return (
    <>
      <div className="blogs-page">
        <div className="container">
          <div className="row">
            <div className="container mt-4">
              <h2 className="mb-4">Manage Blogs</h2>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Add New Blog: <Link to={'/blogs/add-new'}><button type="button" className="btn btn-success">
                  <i class="fa-solid fa-plus"></i>
                </button>{" "}</Link>
                
              </p>
              <Table responsive bordered hover>
                <thead className="table-success">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th style={{ width: "150px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((blog, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{blog.title}</td>
                      <td>{blog.author}</td>
                      <td>{new Date(blog.date).toLocaleDateString()}</td>
                      <td>
                        <Badge
                          bg={
                            blog.status === "Published"
                              ? "success"
                              : "secondary"
                          }
                        >
                          {blog.status}
                        </Badge>
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          size="sm"
                          className="me-2"
                          disabled
                          onClick={() => handleEdit(blog.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          disabled
                          onClick={() => handleDelete(blog.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
