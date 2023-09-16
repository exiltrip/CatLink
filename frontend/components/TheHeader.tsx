import Link from "next/link";

const TheHeader = () => {
    return (
        <header  className="header">
            <Link href="/" className="header__item header__title">🐈 CatLink</Link>
            <div className="header__auth">
            <Link href="/login" className="header__item">Логин</Link>
            <Link href="/signin" className="header__item">Регистрация</Link>
            </div>
        </header>
    );
};

export default TheHeader;