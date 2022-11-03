
function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <p className="view-resume">If you wish to have a copy of my full resume, feel free to contact me!</p>
            <div className="resume-elements">
                <section className="skills card m-2 p-2">
                    <h3>Skills/Proficiencies</h3>
                    <ul>
                        <li>Languages: Javascript, SQL</li>
                        <li>Javascript Libraries and Frameworks: JQuery, React, Redux, Sequelize, Express.js, Node.js, Jest, Mongoose, Handlebars.js</li>
                        <li>Databases: MySQL, MongoDB</li>
                        <li>HTML/CSS, Bootstrap, Foundation, PWA (Progressive Web Applications)</li>
                        <li>GraphQL</li>
                        <li>Git/GitHub/GitHub Pages, Heroku</li>
                        <li>Visual Studio Code, Insomnia</li>
                        <li>Familiarity with Agile/SCRUM practices</li>
                        <li>Microsoft Office, LibreOffice, and Google Sheets, Docs, Presentation, etc.</li>
                    </ul>
                </section>
                <section className="education card m-2 p-2">
                    <h3>Education</h3>
                    <div>
                        <p>University of Utah</p>
                        <ul>
                            <li>Full Stack Web Development Certification</li>
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