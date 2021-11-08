import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';

import styles from '@/styles/home.module.css';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="primary">
        <Link href="/demo">
          <a>Demo</a>
        </Link>
      </Button>
      <div>Title</div>

      <p>那你说</p>
    </div>
  );
}

export default Home;
