import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';

const Layout = () => {
    return (
        <div>
            <Header />
            <Main />
            <ScrollToTopButton />
            <Footer />
        </div>
    );
};

export default Layout;
