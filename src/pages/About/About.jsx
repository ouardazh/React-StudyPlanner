import './About.css';
function About(){
    return(
        <section className='aboutSection'>
            <p className='paragraphBlue'>ABOUT THIS PROJECT</p>
            <h1>Learning React by building</h1>
            <p className='paragraphGris'>This beginner-to-intermediate exercice combines CRUD operations with
                React effects and a small <br /> focus timer.
            </p>

            <h2>Concepts practiced</h2>
            <p className='paragrah'>useStates: <span>storing tasks, form inputs, filters and stopwatch value.</span></p>
            <p className='paragrah'>CRUD: <span>create tasks with spread, update tasks with map, and delete with filter.</span></p>
            <p className='paragrah'>useEffect: <span>saving to localStorage, updating the browser tab title, and cleaning up a stopwatch <br />interval.</span></p>
            <p className='paragrah'>Props: <span>passing task data and event handlers to reusable child components.</span></p>
        </section>
    )
}
export default About;