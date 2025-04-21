import React from "react";
import "../styles/add-blog.css";
import { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { fontsColor } from "../../assets/fonts/colors";
import { BiLogoQuora } from "react-icons/bi";
const Add_blog_Page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBlogs(parsed);
      console.log(parsed);
    }
  }, []);
  const editorRef = useRef(null);

  const handleSubmit = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();

      const newBlog = content;
      console.log(content);

      const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const updatedBlogs = [...existingBlogs, newBlog];
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      alert("Blog saved successfully!");
      editorRef.current.setContent("");
    } else {
      alert("Please add some content.");
    }
    window.location.reload()
  };

  const deleteBlog = (indexToDelete) => {
    const updatedBlogs = blogs.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h2
            className="text-center mt-5"
            style={{
              color: fontsColor.lightPeach,
              fontSize: "2rem",
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom:'20px',
            }}
          >
            Add New Blog Post
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Editor
            apiKey="2nujgrt96l1jy6su03kjrs5xmc2pi8gasww1onyizoo5fexv"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Write your blog here...</p>"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "anchor",
                "autolink",
                "charmap",
                "codesample",
                "emoticons",
                "image",
                "link",
                "lists",
                "media",
                "searchreplace",
                "table",
                "visualblocks",
                "wordcount",
                "checklist",
                "mediaembed",
                "casechange",
                "formatpainter",
                "pageembed",
                "a11ychecker",
                "tinymcespellchecker",
                "permanentpen",
                "powerpaste",
                "advtable",
                "advcode",
                "editimage",
                "advtemplate",
                "mentions",
                "tableofcontents",
                "footnotes",
                "mergetags",
                "autocorrect",
                "typography",
                "inlinecss",
                "markdown",
                "importword",
                "exportword",
                "exportpdf",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
          />
          <button className="btn btn-primary mt-3 submit-btn" onClick={handleSubmit}>
            Submit Blog
          </button>
        </div>
      </div>
      <div className="row mt-5">
      {blogs.length === 0 ? (
        <h1>No Blogs Found....</h1>
      ) : (
        blogs.map((blogHTML, index) => {
          return (
            <div key={index} className="card p-3 mb-3">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogHTML }}
              />
              <button
                onClick={() => deleteBlog(index)}
                className="btn btn-danger mt-2 delete-btn"
              >
                Delete Blog
              </button>
            </div>
          );
        })
      )}
      </div>
    </div>
  );
};

export default Add_blog_Page;
