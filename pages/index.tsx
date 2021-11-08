import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from 'antd';
import LayoutComponent from './components/layout';
import styles from '@/styles/home.module.css';

const Home = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const DynamicComponentWithNoSSR = dynamic(import('./components/hello'), {
    ssr: false,
  });

  return (
    <LayoutComponent>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Button type="primary">
          <Link href="/demo">
            <a>Demo</a>
          </Link>
        </Button>
        <div>Title</div>
        {showChat && <DynamicComponentWithNoSSR />}
        <p onClick={() => setShowChat(true)}>那你说</p>
      </div>
    </LayoutComponent>
  );
};

export default Home;
