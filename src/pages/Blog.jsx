import { Link } from 'react-router-dom'
import { getSortedPosts, getCategories } from '../data/blogPosts'
import './Blog.css'

function Blog() {
  const posts = getSortedPosts()
  const categories = getCategories()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="page blog-page">
      <div className="blog-container">
        <h1 className="blog-title">Blog & Notes</h1>
        <p className="blog-description">
          Philosophy: Meditations on human life, morality, and reality.
        </p>

        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-posts">
            {posts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <Link to={`/blog/${post.id}`} className="blog-post-link">
                  <div className="blog-post-header">
                    <span className="blog-post-category">{post.category}</span>
                    <span className="blog-post-date">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="blog-post-footer">
                    <div className="blog-post-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                    {post.readTime && (
                      <span className="blog-read-time">{post.readTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
