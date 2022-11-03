
function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <p className="view-resume">If you wish to have a copy of my full resume, feel free to contact me!</p>
            <div className="resume-elements">
                <section className="skills card m-2 p-2">
                    <h3>Skills/Proficiencies</h3>
                    <ul>
                        <li>Javascript, jQuery</li>
                        <li>HTML/CSS, Bootstrap, Foundation</li>
                        <li>Handlebars.js</li>
                        <li>SQL, mySQL, Sequelize</li>
                        <li>Node.js, express.js, Jest</li>
                        <li>React, Redux, MERN</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>PWA</li>
                        <li>Heroku, Git/GitHub/GitHub Pages</li>
                        <li>Insomnia, Visual Studio Code</li>
                    </ul>
                </section>
                <section className="education card m-2 p-2">
                    <h3>Education</h3>
                    <div>
                        <p>University of Utah</p>
                        <ul>
                            <li>Full Stack Coding Bootcamp Certification</li>
                        </ul>
                    </div>
                    <div>
                        <p>Southern Utah University</p>
                        <ul>
                            <li>Completed 79 credits towards a B.A. in English Education with an emphasis in Creative Writing</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Resume;