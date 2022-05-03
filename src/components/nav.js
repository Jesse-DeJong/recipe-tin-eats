import '../styles/reset.css';
import '../styles/style.css';

const Nav = () => {
    return (
        <section className='nav'>
            <ul className='nav__list'>
                <li className='nav__listItem'>MY RECIPETIN</li>
                <li className='nav__listItem'>RECIPES</li>
                <li className='nav__listItem'>BY CATEGORY</li>
                <li className='nav__listItem'>SPECIAL</li>
                <li className='nav__listItem'>COLLECTIONS</li>
                <li className='nav__listItem'>ABOUT</li>
            </ul>
        </section>
    )
}

export default Nav;