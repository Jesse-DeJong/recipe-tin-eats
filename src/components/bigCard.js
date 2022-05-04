import '../styles/reset.css';
import '../styles/style.css';

const BigCard = ({
    title,
    description,
    category,
    img
}) => {
    return (
        <section className='bigcard'>
            <img 
            className='bigcard__img' 
            src={img}
            alt='food pic'
            ></img>
            <label className='bigcard__label'>{category}</label>
            <h4 className='bigcard__title'>{title}</h4>
            <ul className='bigcard__list'>
                <li className='bigcard__listItem'>
                    Mar 28, 2022
                </li>
                <li className='bigcard__listItem'>
                    964 Comments
                </li>
            </ul>
            <p className='bigcard__desc'>{description}</p>
            <button className='bigcard__button'>GET THE RECIPE {'>'}</button>
        </section>
    )
}

export default BigCard;