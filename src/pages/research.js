import React, { useState } from 'react';
import './blog-page.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setBlogs([...blogs, { title, content }]);
    setTitle('');
    setContent('');
  }

  return (
    <div className="container">
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={title} onChange={handleTitleChange} />

        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange}></textarea>

        <button type="submit">Add Blog</button>
      </form>

      <div className="blogs">
        {blogs.map((blog, index) => (
          <div className="blog" key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
