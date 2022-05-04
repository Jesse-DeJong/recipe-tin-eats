import '../styles/reset.css';
import '../styles/style.css';

const Signup = () => {
    return (
        <section className='signup'>
            <h2 className='signup__heading'>FREE RECIPE EBOOKS</h2>
            <p className='signup__para'>Join my free email list to receive THREE free cookbooks!</p>
            <ul className='signup__list'>
                <li className='signup__listItem'>
                    <input className='signup__listItem__input' placeholder='First Name'/>
                </li>
                <li className='signup__listItem'>
                    <button className='signup__button'>SIGN UP!</button>
                </li>
            </ul>
            <input className='signup__input' placeholder='Email address'/>
            <img className='signup__img' src='https://www.recipetineats.com//wp-content/themes/once-coupled-recipe-tin-eats/assets/images/subscribe-sidebar.webp'/>
        </section>
    )
}

export default Signup;