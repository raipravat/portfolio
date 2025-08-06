"use client"; // 👈 Add this at the very top

import React, { useEffect } from "react";

const Blog = () => {
  const BLOG_URL = "https://blog.prabhat.info.np";
  const POSTS_TO_SHOW = 3;
  const EXCERPT_LENGTH = 150;

  useEffect(() => {
    const callbackName = "handleBloggerResponse" + Date.now();
    window[callbackName] = function (data) {
      displayPosts(data.feed.entry);
      delete window[callbackName];
    };

    const script = document.createElement("script");
    script.src = `${BLOG_URL}/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
    script.onerror = () => {
      document.getElementById("blog-posts").innerHTML = `
        <div class="error" style="text-align: center; padding: 40px; color: #e74c3c;">
          Failed to load blog posts. Try <a href="${BLOG_URL}" style="color:#3498db;">visiting directly</a>.
        </div>`;
    };
    document.head.appendChild(script);
  }, []);

  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const displayPosts = (posts) => {
    const container = document.getElementById("blog-posts");
    if (!posts || posts.length === 0) {
      container.innerHTML =
        '<div style="text-align:center; padding:40px;">No posts found.</div>';
      return;
    }

    let html = "";
    posts.slice(0, POSTS_TO_SHOW).forEach((post) => {
      const title = post.title.$t;
      const fullContent = post.content.$t;
      const excerpt =
        stripHtml(fullContent).substring(0, EXCERPT_LENGTH) + "...";
      const url = post.link.find((link) => link.rel === "alternate").href;
      const date = new Date(post.published.$t).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const imgMatch = fullContent.match(/<img[^>]+src="([^">]+)"/);
      const imageUrl = imgMatch ? imgMatch[1] : null;

      html += `
        <div class="post-card">
          ${
            imageUrl
              ? `<div class="post-image"><img src="${imageUrl}" alt="${title}" loading="lazy" /></div>`
              : ""
          }
          <div class="post-content">
            <h3 class="post-title">${title}</h3>
            <p class="post-excerpt">${excerpt}</p>
            <div class="post-meta">
              <span>${date}</span>
              <a href="${url}" class="read-more" target="_blank" rel="noopener">Read More</a>
            </div>
          </div>
        </div>`;
    });

    container.innerHTML = html;
  };

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <h2 className="section-title fade-in">
          Latest <span className="highlight">Blog Posts</span>
        </h2>
        <div className="posts-grid" id="blog-posts">
          <div className="loading">Loading posts...</div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
