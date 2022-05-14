import React, { useEffect, useState } from "react";
import useCategories from "../../useCategories";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

const CreatePost = () => {
  const [categories] = useCategories();
  const [text, setText] = useState("");

  return (
    <div className="container pt-5">
      <div className="display-4 text-center fw-bold p-3 mt-3">
        Create new post
      </div>
      <form className="fw-bold">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the title of post"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Category
          </label>
          {categories === null ? (
            "loading..."
          ) : (
            <select name="categories" id="categories" className="form-select">
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
        <div className="mb-3">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input type="file" name="image" id="image" className="form-control" />
        </div>
        <div className="mb-3 border">
          <div className="row">

          <button className="btn btn-success btn-lg col-md-6 col-12 offset-md-3">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
