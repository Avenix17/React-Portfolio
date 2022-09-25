
function Navigation(props) {
    const { currentNav, setCurrentNav } = props;
    return (
        <ul>
            <button className={`btn btn-dark ${currentNav === 'about' && 'btn-active'}`} onClick={() => setCurrentNav('about')}>About Me</button>
            <button className={`btn btn-dark ${currentNav === 'portfolio' && 'btn-active'}`} onClick={() => setCurrentNav('portfolio')}>Portfolio</button>
            <button className={`btn btn-dark ${currentNav === 'contact' && 'btn-active'}`} onClick={() => setCurrentNav('contact')}>Contact</button>
            <button className={`btn btn-dark ${currentNav === 'resume' && 'btn-active'}`} onClick={() => setCurrentNav('resume')}>Resume</button>
        </ul>
    );
}

export default Navigation;