import SingInButton from '../SingInButton';
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo" />
                <nav>
                    <a className={styles.active} >Home</a>
                    <a >Post</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    );
}