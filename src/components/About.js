import picome from '../assets/picome.jpg';

function About() {
    return (
        <div>
            <img src={picome} alt='Me just chillin' width='325' height='400'/>
            <article style={{color: 'white', backgroundColor: 'black'}}>
                <p>Hello there!</p>
                <p>My name is Avyrie Fellows, and I am an aspiring FullStack Web developer! I have almost completed my certification within the U of U FullStack Web Development Boot Camp. This portfolio showcases some of the projects and assignments I have created and collaborated on within my time in this course.</p>
                <p>I also have a college background in English Education with an emphasis in creative writing and tend to spend a lot of my free time writing or coding. I have a passion for learning and love to push myself in new ways. Feel free to reach out and ask me any questions that you may have!</p>
            </article>
        </div>
    );
}

export default About;