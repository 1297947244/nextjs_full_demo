import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

const LeftMenu = () => {
  const router = useRouter();

  const goToChat = () => {
    // 动态加载聊天组件
    router.push({
      pathname: '/chat',
    });
  };

  return (
    <div className={styles.left_menu}>
      <ul>
        <li>
          <Link href="/">
            <a>首页</a>
          </Link>
        </li>
        <li>
          <Link href="/demo">
            <a>demo</a>
          </Link>
        </li>
        <li onClick={() => goToChat()}>
          <a>VR</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
