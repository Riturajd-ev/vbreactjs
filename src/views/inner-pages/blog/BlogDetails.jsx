import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogComment from "../../../components/blog/BlogComment";
import BlogCommentForm from "../../../components/blog/BlogCommentForm";
import BlogPostAuthor from "../../../components/blog/BlogPostAuthor";
import RelatedPost from "../../../components/blog/RelatedPost";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ImageGridTwo from "../../../components/image-grid/ImageGridTwo";
import SocialFour from "../../../components/social/SocialFour";

const BlogDetails = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Moonex - Bog Post Details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <header className="ptf-single-post__header ptf-single-post__header--style-1">
              <div className="container-xxl">
                <h1 className="ptf-single-post__title">
                Grow Your Business
                </h1>
                <div className="ptf-single-post__meta">
                  <span className="cat">Inspiration</span>
                  <span className="date">Dec 7, 2021</span>
                </div>
              </div>
            </header>

            {/* <!--Post Media--> */}
            <div className="ptf-single-post__media">
              <div className="container-xxl">
                <img
                  src="assets/img/blog/single-post/post-media-1.png"
                  alt="blog post"
                  loading="lazy"
                />
              </div>
            </div>

            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Info--> */}
                    <div className="ptf-single-post__info">
                      <a className="author" href="#">
                        <i className="lnil lnil-user"></i>by <span>Admin</span>
                      </a>
                      <a className="view" href="#">
                        <i className="lnil lnil-eye"></i>5,6k Views
                      </a>
                      <a className="comments" href="#">
                        <i className="lnil lnil-comments"></i>3 Comments
                      </a>
                      <a className="report" href="#">
                        <i className="lnil lnil-warning"></i>Report
                      </a>
                    </div>

                    {/* <!--Post Excerpt--> */}
                    <div className="ptf-single-post__excerpt">
                    Grow Your Business{" "}<br />
                      {/* <span className="has-accent-1">Pavel Murren</span> and */}
                      1. Identify needs of your customers
                    </div>
                    {/* <!--Post Content--> */}
                    <div className="ptf-single-post__content">
                      <p>
                      Predominant motto of enterprise and business is to enhance their business growth and maintain goodwill among its customers. Recognizing the needs and preferences of your customers is the prior step each and every organization have to opt for running smoothly in the business environment.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      2. Host Events and Webinars
                    </div>
                      <p>
                      Organizing events and webinars helps you to exhibit products and services you are proffering to large numbers of audiences. Not only it helps businesses to establish relationships with people but also enhances credibility and authenticity among people. Also, optimum way to participate in one on one conversations which consists of talking about various topics of common interest.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      3. Persistent Monitoring
                    </div>
                      <p>
                      Constant Monitoring detects the flaws and problems arriving in business activities. It ensures you to refine your policies and strategies for better survival. Moreover, it supports you to analyze the results of your pivotal efforts and time. It raises productivity by seeking out what’s inefficient, degrading, or working as intended.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      4. Market Expansion and Diversification
                    </div>
                      <p>
                      Diversification is the imperative factor in the growth of businesses. Diversification of business can be performed in numerous ways such as commencing new business, adding different segments related to products and services. Specifically, diversification is the riskiest strategy as it is most uncertain but if executed in the right direction at the right time will boost the brand image and profitability of the company.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      5. Build Strong team
                    </div>
                      <p>
                      Employees are the ultimate asset of the company. Each and every accomplishment of the organization is attributed with employees who devote their valuable time in maintaining the reputation of the organization. However, it is an accountability of organizations to give vigilant attention to the needs of employees and offer them employee benefits to boost their morale which in turn increases productivity.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      5. Build Strong team
                    </div>
                      <p>
                      Employees are the ultimate asset of the company. Each and every accomplishment of the organization is attributed with employees who devote their valuable time in maintaining the reputation of the organization. However, it is an accountability of organizations to give vigilant attention to the needs of employees and offer them employee benefits to boost their morale which in turn increases productivity.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      6. Opt Social Media Platforms
                    </div>
                      <p>
                      Social media Platforms are rendering tremendous assistance to enhance the presence of online businesses. It assures you to connect, build networking, interact and reach a large number of people simultaneously. Metaphorically, it stimulates you to promote your business and gain insights about customers behaviour and recognize the way to fulfill stipulations of clients. One of the predominant advantages of social media is that it doesn’t attribute to cost.
                      </p>
                      <div className="ptf-single-post__excerpt">
                      7. Nurture the needs of existing customers
                    </div>
                      <p>
                      To attain business growth, organizations must be careful about their existing customer base. They must opt strategies to be in contact with existing customers via email, webinars and newsletter.
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      <ImageGridTwo />

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {/* <p>
                        The short answer is yes. According to Kross, when you
                        think of yourself as another person, it allows you lorem
                        ispumgive yourself more. Notre dame at sumeobjective,
                        helpful feedback.
                      </p> */}
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "6.25rem",
                          "--ptf-md": "3.125rem",
                        }}
                      ></div>
                      {/* <!--Twitter Review--> */}
                      
                      <p>
                        Cray post-ironic plaid, Helvetica keffiyeh tousled
                        Carles banjo before they sold out blog photo booth Marfa
                        semiotics Truffaut. Mustache Schlitz next level blog
                        Williamsburg, deep v typewriter tote bag Banksy +1
                        literally.
                      </p>
                      <ul style={{ lineHeight: "2" }}>
                        <li>
                          Welsh novelist Sarah Waters sums it up eloquently
                        </li>
                        <li>
                          In their classic book, Creativity in Business, based
                          on a popular course they co-taught
                        </li>
                        <li>Novelist and screenwriter Steven Pressfield</li>
                      </ul>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p>
                        That immediately brought to mind one of{" "}
                        <a
                          className="text-decoration-underline has-accent-4"
                          href="#"
                        >
                          my fondest
                        </a>{" "}
                        memories, involving my daughter when she was just a
                        toddler of one.
                      </p>
                    </div>

                    {/* <!--Post Footer--> */}
                    <footer className="ptf-single-post__footer">
                      {/* <!--Post Tags--> */}
                      <div className="ptf-post-tags">
                        <a href="#">WordPress</a>
                        <a href="#">Theme</a>
                        <a href="#">Creative</a>
                      </div>
                      {/* <!--Post Socials--> */}
                      <div className="ptf-post-socials">
                        <span>Share on</span>
                        <SocialFour />
                      </div>
                    </footer>

                    {/* <!--About Author--> */}
                    <BlogPostAuthor />
                    {/* End .ptf-about-author */}

                    {/* <!--Related Posts--> */}
                    <div className="ptf-related-posts">
                      <h2 className="ptf-related-posts__title">
                        Related Posts
                      </h2>
                      <div className="ptf-isotope-grid">
                        <div
                          className="row"
                          style={{ "--bs-gutter-y": "2rem" }}
                        >
                          <RelatedPost />
                        </div>
                      </div>
                    </div>
                    {/* End .ptf-related-posts */}

                    {/* <!--Comments--> */}
                    <section className="ptf-page-comments">
                      {/* <!--Comments list--> */}
                      <div className="ptf-page-comments__list">
                        <h2 className="ptf-page-comments__title">
                          03 Comments:
                        </h2>
                        <BlogComment />
                      </div>

                      {/* <!--Comments form--> */}
                      <div className="ptf-page-comments__form">
                        <h2 className="ptf-page-comments__title">
                          Leave a comment:
                        </h2>
                        <BlogCommentForm />
                      </div>
                    </section>

                    {/* <!--Post Navigation--> */}
                    <div className="ptf-post-navigation ptf-post-navigation--style-1">
                      <span>Next Post</span>
                      <Link className="h1 ptf-filled-link" to="/blog-details-sidebar">
                        Minimalist Trends
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetails;
