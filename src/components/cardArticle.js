import '../styles/reset.css';
import '../styles/style.css';

const CardArticle = ({
    img,
    category,
    title,
    date,
    comments,
    description
}) => {
    return (
        <>
            <section className='cardarticle__left'>
                <img 
                className='cardarticle__left__img' 
                src={img}
                alt={category}
                ></img>
            </section>
            <section className='cardarticle__right'>
                <p className='cardarticle__right__category'>{category}</p>
                <h4 className='cardarticle__right__heading'>{title}</h4>
                <ul className='bigcard__list'>
                    <li className='bigcard__listItem'>
                        {date}
                    </li>
                    <li className='bigcard__listItem'>
                        {comments}
                    </li>
                </ul>
                <p className='cardarticle__right__description'>{description}</p>
                <button className='cardarticle__right__button'>GET THE RECIPE {'>'}</button>
            </section>
        </>
    )
}

export default CardArticle;