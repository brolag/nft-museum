import { Link } from 'react-router-dom';
import CollectionCard from '@/components/CollectionCard';

const Home = () => {
  return (
    <>
      <div
        style={{ height: 'calc(100vh - 30px)' }}
        className="p-4 bg-light-gray"
      >
        <div className="flex justify-between items-center mb-16">
          <span className="text-sm font-medium text-gray-500">Collections</span>
          <span className="text-sm font-medium text-gray-300">
            SORT / FILTER
          </span>
        </div>

        <div className="flex flex-wrap justify-between">
          {[1, 2, 3, 4].map((item) => (
            <CollectionCard />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
