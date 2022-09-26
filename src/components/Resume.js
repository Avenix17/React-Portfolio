
function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <p className="download-resume">To view and download my full resume, click <a href="https://docs.google.com/document/d/1oV5w2nDytbTFy65kBetFAX6jgLUmXQW7bgxwlgK3_jY/edit?usp=sharing" target='_blank' rel="noopener noreferrer">here</a>.</p>
            <div className="resume-elements">
                <section className="skills card m-2 p-2">
                    <h3>Skills/Proficiencies</h3>
                    <ul>
                        <li>Javascript, JQuery</li>
                        <li>HTML/CSS, Bootstrap, Foundation</li>
                        <li>SQL, mySQL, Sequelize</li>
                        <li>Node.js, express.js</li>
                        <li>React, Redux, MERN</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>PWA</li>
                    </ul>
                </section>
                <section className="education card m-2 p-2">
                    <h3>Education</h3>
                    <div>
                        <p>University of Utah - 2022</p>
                        <ul>
                            <li>Full Stack Coding Bootcamp Certification</li>
                        </ul>
                    </div>
                    <div>
                        <p>Southern Utah University - 2018-2021</p>
                        <ul>
                            <li>Completed 79 credits towards a B.A. in English Education with an emphasis in Creative Writing</li>
                        </ul>
                    </div>
                </section>
                <section className="experience card m-2 p-2">
                    <div>
                        <h3>Work Experience</h3>
                        <p>Warehouse Team Lead, Pillow Cube - 2021-2022</p>
                        <ul>
                            <li>Helped with production</li>
                            <li>Managed inventory of warehouse</li>
                            <li>Completed special orders/projects</li>
                            <li>Assisted Supervisor in oversight of warehouse</li>
                            <li>Created and made labels/pallet slips</li>
                            <li>Signed off on incoming shipments</li>
                            <li>Forklift operation</li>
                            <li>Often played technical support</li>
                        </ul>
                        <p>Kiosk employee, Stair Slide - 2021</p>
                        <ul>
                            <li>Demonstrated product</li>
                            <li>Customer Sales</li>
                            <li>Answered customer questions/concerns</li>
                            <li>Managed Register</li>
                        </ul>
                    </div>
                </section>
                <section className="references card m-2 p-2">
                    <h3>References</h3>
                    <p>Can be given upon request.</p>
                </section>
            </div>
        </div>
    );
}

export default Resume;