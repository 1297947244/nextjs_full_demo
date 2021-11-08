import styles from './index.module.scss';

const chatContainer = () => {
  console.log('禁止使用 SSR');
  return (
    <div className={styles.chat_container}>
      <h1>熊超</h1>
      <p>web 前端开发</p>
      <p>PC 客户端开发</p>
    </div>
  );
};

export default chatContainer;
