import '../styles/reset.css';
import '../styles/style.css';

const Linebreak = () => {
    return (
        <section className='linebreak'>
            <ul className='linebreak__list'>
                <li className='linebreak__listItem'>
                    <h2 className='linebreak__heading'>QUICK DINNER RECIPES</h2>
                </li>
                <li className='linebreak__listItem'>
                    <p className='linebreak__para'>you can make tonight!</p>
                </li>
                <li className='linebreak__listItem'>
                    <button className='linebreak__button'>BROWSE RECIPES {'>'}</button>
                </li>
            </ul>
        </section>
    )
}

export default Linebreak;