import React from "react";
import "../css/Blog.css";
const Blog = () => {
  return (
    <div className="Blog section-wrapper">
      <h2 className="blog-title title">Blog</h2>
      <h4 className="blog-subtitle subtitle">
        Viverra tristique placerat massa estionos consectetur quisque nu fames
        lorem ipsum
      </h4>
      <div className="blog-posts">
        <div className="post">
          <a href="#" className="post-title">
            Lights winged seasons fish abundantly evening.
          </a>
          <div className="post-info">
            <div className="post-date">NOV 4, 2020</div>
            <div className="post-cateory">
              <a id="post-category-link" href="#">
                Branding
              </a>
            </div>
          </div>
        </div>
        <div className="post">
          <a href="#" className="post-title">
            Given void great you’re good appear have i also fifth.
          </a>
          <div className="post-info">
            <div className="post-date">NOV 5, 2020</div>
            <div className="post-cateory">
              <a id="post-category-link" href="#">
                Events
              </a>
            </div>
          </div>
        </div>
        <div className="post">
          <a href="#" className="post-title">
            Winged moved stars, fruit creature seed night.
          </a>
          <div className="post-info">
            <div className="post-date">NOV 6, 2020</div>
            <div className="post-cateory">
              <a id="post-category-link" href="#">
                Design
              </a>
            </div>
          </div>
        </div>
        <div className="post">
          <a href="#" className="post-title">
            What is Tailwind CSS and why you should use it
          </a>
          <div className="post-info">
            <div className="post-date">NOV 7, 2020</div>
            <div className="post-cateory">
              <a id="post-category-link" href="#">
                Front-End Dev
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="read-more"><a href="/">read more</a></div>
    </div>
  );
};

export default Blog;
