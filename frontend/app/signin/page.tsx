import styles from '@/styles/auth.module.css'

const signin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth__window}>
                <h1 className={styles.title}>Регистрация</h1>
                <input className={styles.input} placeholder="Логин"/>
                <input className={styles.input} placeholder="Почта"/>
                <input className={styles.input} placeholder="Номер телефона"/>
                <input className={styles.input} placeholder="Пароль"/>
                <button className={styles.button}>Регистрация</button>
            </div>
        </div>
    );
};

export default signin;