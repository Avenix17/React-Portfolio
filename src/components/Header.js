import Navigation from '../components/Navigation';

function Header(props) {
    const { currentNav, setCurrentNav } = props;
    return (
        <header>
            <div className='header-info'>
                <h1>Avyrie Fellows</h1>
                <Navigation currentNav={currentNav} setCurrentNav={setCurrentNav}/>
            </div>
        </header>
    );
}

export default Header;