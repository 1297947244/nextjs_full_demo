import Head from 'next/head';
import LeftMenu from '../left_menu';
import styles from './index.module.scss';

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>公共Title</title>
      </Head>
      <div className={styles.layout_header}>顶部搜索栏</div>
      <div className={styles.layout_center}>
        <LeftMenu />
        {children}
      </div>
      {/* <footer>版权所有，翻版必究。</footer> */}
    </>
  );
};

export default LayoutComponent;
