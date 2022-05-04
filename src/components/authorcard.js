import '../styles/reset.css';
import '../styles/style.css';

const AuthorCard = ({
    title,
    description,
    img
}) => {
    return (
        <section className='authorcard'>
            <img 
            className='authorcard__img' 
            src={img}
            alt={title}
            ></img>
            <h4 className='authorcard__title'>{title}</h4>
            <p className='authorcard__desc'>{description}</p>
            <button className='authorcard__button'>READ MORE {'>'}</button>
        </section>
    )
}

export default AuthorCard;