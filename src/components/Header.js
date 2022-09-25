import Navigation from '../components/Navigation';

function Header(props) {
    const { currentNav, setCurrentNav } = props;
    return (
        <header>
            <Navigation currentNav={currentNav} setCurrentNav={setCurrentNav}/>
        </header>
    );
}

export default Header;