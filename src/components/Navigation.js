
function Navigation(props) {
    const { currentNav, setCurrentNav } = props;
    return (
        <ul>
            <button className={`${currentNav === 'about'}`} onClick={() => setCurrentNav('about')}>About Me</button>
            <button className={`${currentNav === 'portfolio'}`} onClick={() => setCurrentNav('portfolio')}>Portfolio</button>
            <button className={`${currentNav === 'contact'}`} onClick={() => setCurrentNav('contact')}>Contact</button>
            <button className={`${currentNav === 'resume'}`} onClick={() => setCurrentNav('resume')}>Resume</button>
        </ul>
    );
}

export default Navigation;