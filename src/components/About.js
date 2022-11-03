import picome from '../assets/picome.jpg';

function About() {
    return (
        <div className='about-me'>
            <img className='self-picture' src={picome} alt='Me just chillin' width='325' height='400'/>
            <article>
                <h3>Hey there!</h3>
                <p>My name is Avyrie Fellows, and I am an aspiring Junior Full Stack Web developer! I have completed my certification within the U of U Full Stack Web Development Boot Camp. This portfolio showcases some of the projects and assignments I have created and collaborated on within my time in this course.</p>
                <p>I also have a college background in English Education with an emphasis in creative writing and tend to spend a lot of my free time writing or coding. I have a passion for learning and love to push myself in new ways. Feel free to reach out and ask me any questions that you may have!</p>
            </article>
        </div>
    );
}

export default About;