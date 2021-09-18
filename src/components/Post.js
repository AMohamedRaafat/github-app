import React from 'react'
import { Item, ItemHead, ItemBody, ItemText} from './PostCss';
const Post = (props) => {
    const repos = props.repos;
    return (
      <div className="Repos">
        <div className="row">
          {repos.map(post => {
            return (
                <Item className="col-md-4 mt-3" key={post.id}>
                  <ItemHead><h4>{post.name}</h4></ItemHead>
                  <ItemBody>
                    <ItemText className="card-text">{post.description !== "" ? post.description : "No Description" }</ItemText>
                    <a href={post.svn_url} className="btn btn-outline-warning">Project Link</a>
                  </ItemBody>
                </Item>
            )

          })}
          </div>
      </div>
    )
}
export default Post;