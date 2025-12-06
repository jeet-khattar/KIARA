import React from "react";

const BlogPosts = () => {
  return (
    <>
      <div className="container Blogheading">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <h1>Read Blog Posts</h1>
          </div>

          <div className="col-auto">
            <a type="button">VIEW ALL</a>
          </div>
        </div>
      </div>

      <div className="container Blogpost">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="cardbox">
              <img
                src={require("../Img/post-image1.jpg")}
                class="card-img-top"
                alt="..."
              />
              <h5 class="card-title">Fashion / jul 11, 2022</h5>
              <p class="card-text-1">How to look outstanding in pastel</p>
              <p class="card-text">
                Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
                purus,gravida orci,fringilla...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="cardbox">
              <img
                src={require("../Img/post-image2 (1).jpg")}
                class="card-img-top"
                alt="..."
              />
              <h5 class="card-title">Fashion / jul 11, 2022</h5>
              <p class="card-text-1">How to look outstanding in pastel</p>
              <p class="card-text">
                Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
                purus,gravida orci,fringilla...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="cardbox">
              <img
                src={require("../Img/post-image3.jpg")}
                class="card-img-top"
                alt="..."
              />
              <h5 class="card-title">Fashion / jul 11, 2022</h5>
              <p class="card-text-1">How to look outstanding in pastel</p>
              <p class="card-text">
                Dignissim lacus,turpis ut suspendisse vel tellus.Turpis
                purus,gravida orci,fringilla...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
