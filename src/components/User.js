import React from 'react'
import { Avatar, Parent , Pic,  None, Title, Button, Bio} from './UserCss';
const User = (props) => {
    const data = props.data;
    const get = props.get;
 
    return (
      <Parent className="container">
        <Bio className="row text-center">
          <Avatar className="col-12 avatar">
            <Pic src={data.avatar_url} alt={data.name} className="img-fluid" />
          </Avatar>
          <div className="info row mt-5">
            <div className="name col-12 mt-2">
                <h5>Full Name</h5>
                <h6>{data.name}</h6>
            </div>
            <div className="user col-6 mt-2 mb-2">
                <h5>Username</h5>
                <h6>{data.login}</h6>
            </div>
            <div className="profile col-6 mt-2">
              <h5>Visit Profile</h5>
              <a className="btn btn-outline-warning" href={data.html_url}>Profile</a>
            </div>
          </div>
          <div className="row mt-3">
            <None className="repos col-3 offset-1 mt-2">
              <Title>Repos</Title>
              <Button onClick={get} className="btn btn-dafault">{data.public_repos}</Button>
            </None>
            <None className="follower col-3 offset-1 mt-2">
              <Title>Follower</Title>
              <Button className="btn btn-dafault">{data.followers}</Button>
            </None>
            <None className="repos col-3 offset-1 mt-2">
              <Title>Following</Title>
              <Button className="btn btn-dafault">{data.following}</Button>
            </None>
          </div>
          <Bio className="col-12 bio mt-3">
            <p>{data.bio}</p>
          </Bio>
        </Bio>
        </Parent>
            )
}
export default User;