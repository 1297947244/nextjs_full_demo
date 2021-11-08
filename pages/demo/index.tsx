import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';
import LayoutComponent from '../components/layout';
import styles from '@/styles/demo.module.scss';

const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <LayoutComponent>
      <div className={styles.root}>
        <Head>
          <title>我的demo页</title>
        </Head>
        <main>
          <Link href="/">
            <a>
              <Button type="link">返回</Button>
            </a>
          </Link>
          <div className={styles.content}>
            <p>You clicked {count} times</p>

            <Button onClick={() => setCount(count + 1)}>Click me</Button>
          </div>
        </main>

        <img className={styles.img} src="/static/cartoon.jpeg" alt="my image" />
      </div>
    </LayoutComponent>
  );
};

export default Demo;
