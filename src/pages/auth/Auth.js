import { useState } from 'react';
import { Button } from 'antd';

import LogoSVG from '@/assets/logo.svg';
import ArtMuseumSVG from '@/assets/art_museum.svg';
import { PoweroffOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <>
      <div
        style={{ height: 'calc(100vh' }}
        className="p-4 flex flex-col items-center bg-white"
      >
        <br />
        <br />
        <LogoSVG />
        <br />
        <ArtMuseumSVG style={{ width: '300px' }} />
        <span className="text-sm text-center font-medium text-gray-500">
          A mobile first platform for art lovers to curate their favorite
          digital art pieces as NFT collections
        </span>
        <br />
        <br />
        <br />
        <br />
        <Button
          style={{ backgroundColor: '#1BB775' }}
          className="flex items-center"
          type="primary"
          icon={<PoweroffOutlined />}
          size="large"
          shape="round"
        >
          Connect your Wallet
        </Button>
      </div>
    </>
  );
};

export default Home;
