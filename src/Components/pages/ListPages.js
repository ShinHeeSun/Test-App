import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Card from '../Card';
import { Link } from 'react-router-dom';

function ListPages() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('http://localhost:3001/posts').then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between m-3">
        <h1>User List</h1>
        <div>
          <div>
            <Link to="/blogs/Create" className="btn btn-success">
              Login
            </Link>
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            id={post.id}
            password={post.password}
            onClick={() => {
              history.push('/blogs/edit');
            }}
          >
            <div className="d-flex justify-content-between">
              <div className="card-body">ID: {post.id}</div>
              <div className="card-body">PASSWORD: {post.password}</div>
              <button className="card-body">button</button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
export default ListPages;
