import React from 'react'

const Post = (props) => {
    const repos = props.repos;
    return (
      <div className="Repos">
        <div className="row">
          {repos.map(post => {
            return (
              <div className="card text-dark bg-warning mb-3" style={{maxWidth: "30.3rem"}} key={post.id}>
                <div className="card-header">{post.full_name}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">{post.description}</p>
                  <a href={post.svn_url} className="btn btn-outline-secondary">Project Link</a>
                  </div>
              </div>
            )

          })}
          </div>
      </div>
    )
}
export default Post;