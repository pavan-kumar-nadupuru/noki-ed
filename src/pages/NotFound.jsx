import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
    <div className="text-center">
      <h1>404</h1>
      <p>Umm... What are you doing?</p>
      <Link to="/" className="btn btn-primary">
        Go Home!
      </Link>
    </div>
  </div>
);

export default NotFound;