import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div style={{ height: 'calc(100vh - 30px)' }} className="prose prose-blue lg:prose-xl">
        <h1>React, Tailwind and Webpack 5 Boilerplate</h1>

        <p>
          A bare minimum, and as much as un-opinionated as can be, boilerplate
          so you can start develope and deploy React apps with Tailwind CSS and
          Webpack 5.
        </p>

        <p>
          Checkout <Link to="/collection">collection</Link> page.
        </p>
      </div>
    </>
  );
};

export default Home;
