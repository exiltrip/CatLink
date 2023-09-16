import styles from '@/styles/auth.module.css'

const login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth__window}>
                <h1 className={styles.title}>Логин</h1>
                <input className={styles.input} placeholder="Логин"/>
                <input className={styles.input} placeholder="Пароль"/>
                <button className={styles.button}>Логин</button>
            </div>
        </div>
    );
};

export default login;