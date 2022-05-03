import '../styles/reset.css';
import '../styles/style.css';

const CardAd = ({
    title,
    description,
    category,
    img
}) => {
    return (
        <section className='card_ad'>
            <img 
            className='card_ad__img' 
            src={img}
            alt='food pic'
            ></img>
            <label className='card_ad__label'>{category}</label>
            <h4 className='card_ad__title'>{title}</h4>
            <p className='card_ad__desc'>{description}</p>
        </section>
    )
}

export default CardAd;