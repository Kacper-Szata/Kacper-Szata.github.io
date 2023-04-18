import React from 'react';
import { Link } from 'react-router-dom';

export function AppPage() {
  return (
    <div>
      <h1>This is the App page</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default AppPage;
