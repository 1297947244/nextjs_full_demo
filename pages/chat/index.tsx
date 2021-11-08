import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import LayoutComponent from '../components/layout';
import styles from '@/styles/demo.module.scss';

const DynamicComponent = dynamic(() => import('../components/hello'));

const GroupChat = () => {
  return (
    <LayoutComponent>
      <div className={styles.root}>
        <Head>
          <title>我的群聊页</title>
        </Head>
        <DynamicComponent />
      </div>
    </LayoutComponent>
  );
};

export default GroupChat;
