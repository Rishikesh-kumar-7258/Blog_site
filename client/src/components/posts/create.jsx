import React, { useEffect, useState } from "react";
import useCategories from "../../useCategories";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import useCSRF from "../../useCSRF";

const CreatePost = () => {
  const [categories] = useCategories();
  const [text, setText] = useState("");
  const [post, setPost] = useState({
    title : "",
    categories : "",
    content : text,
    image : ""
  })
  const [csrftoken, ] = useCSRF();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // fetch("http://localhost:8000/api/create_post/", {
    //   method : "POST",
    //   headers : {
    //     "Content-Type" : "application/json",
    //     'X-CSRFToken': csrftoken
    //   },
    //   body : JSON.stringify(post)
    // })
    // .catch(err => console.log(err));
    console.log(post);

  }

  const handleChange = (e) => {

    const target = e.target.id;
    const value = e.target.value;

    let newPost = {...post};
    newPost[target] = value;
    newPost["content"] = text;
    
    setPost(newPost);
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="display-4 text-center fw-bold p-3 mt-3">
            Create new post
          </div>
          <form className="fw-bold">
            <div className="mb-5">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the title of post"
                id="title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="categories" className="form-label">
                Category
              </label>
              {categories === null ? (
                "loading..."
              ) : (
                <select
                  name="categories"
                  id="categories"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">--select--</option>
                  {categories.map((category) => {
                    return (
                      <option value={category.name} key={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
            <div className="mb-5">
              <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setText(data);
                }}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <div className="row">
                <button className="btn btn-success btn-lg col-md-6 col-12 offset-md-3"
                onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
