import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AWSIcon } from '../assets/aws.svg';

const Home = () => {
  return (
    <div className="page">
      <AWSIcon />
      <h1>Deploy a SPA to AWS S3 and Cloudfront</h1>
      <p>Set up Github action workflow</p>
      <p>Deploy without creating invalidate cloudfront</p>
      <Link to="/s3">What is AWS S3?</Link>
    </div>
  );
};

export default Home;
