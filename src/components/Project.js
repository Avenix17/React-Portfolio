import MovieSearch from '../assets/MovieSearch.JPG';
import ReadIt from '../assets/ReadIt.JPG';
import PasswordGenerator from '../assets/PasswordGenerator.JPG';
import welcomePage from '../assets/welcomepage.JPG';
import webTextEditor from '../assets/webtexteditor.JPG';
import teamProfileGenerator from '../assets/teamprofilegenerator.JPG';

function Project() {

    // will add next project when finished, and random assignments
    const portfolioList = [
        {
            id: 0,
            title: 'MovieSearch',
            img: MovieSearch,
            description: 'An application meant to make searching for movies easier!',
            gitHubRepo: 'https://github.com/EdwardMock/Group-Project-1-Movie',
            deployed: 'https://edwardmock.github.io/Group-Project-1-Movie/'
        },
        {
            id: 1,
            title: 'ReadIt',
            img: ReadIt,
            description: 'A social media application where users can share and discuss books.',
            gitHubRepo: 'https://github.com/Avenix17/Group-Project-2-ReadIt',
            deployed: 'https://stormy-chamber-61658.herokuapp.com/'
        },
        {
            id: 2,
            title: 'Password Generator',
            img: PasswordGenerator,
            description: 'An application that allows to you generate passwords.',
            gitHubRepo: 'https://github.com/Avenix17/Password-Generator',
            deployed: 'https://avenix17.github.io/Password-Generator/Develop/'
        },
        {
            id: 3,
            title: 'Note Taker',
            img: welcomePage,
            description: 'An application where you can take notes!',
            gitHubRepo: 'https://github.com/Avenix17/Note-Taker',
            deployed: 'https://intense-springs-99633.herokuapp.com/'
        },
        {
            id: 4,
            title: 'Text Editor',
            img: webTextEditor,
            description: 'An application that allows users to take notes or write code on and offline!',
            gitHubRepo: 'https://github.com/Avenix17/Text-Editor',
            deployed: 'https://guarded-ridge-10827.herokuapp.com/'
        },
        {
            id: 5,
            title: 'Team Profile Generator',
            img: teamProfileGenerator,
            description: 'A Node.js command-line application that allows users to build teams for jobs.',
            gitHubRepo: 'https://github.com/Avenix17/Team-Profile-Generator',
            deployed: null
        }
    ]

    return (
        <section>
            <h2>Examples of my work!</h2>
            <div className='container'>
                <div className='app-list'>
                    {portfolioList.map((project) => (
                        <div className='card m-2 p-2 customCard' key={project.id}>
                            <img src={project.img} alt={`Screenshot of ${project.title}`} className='cardImage' />
                            <div className='cardInfo'>
                                <h3 className="m-1">{project.title}</h3>
                                <p className="m-1">{project.description}</p>
                                <p className="m-0">
                                    <a href={project.gitHubRepo} target='_blank' rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="purple" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                    {project.deployed !== null &&
                                        <a href={project.deployed} target='_blank' rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="purple" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                            </svg>
                                        </a>
                                    }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;