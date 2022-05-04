import '../styles/reset.css';
import '../styles/style.css';

const Dozer = () => {
    return (
        <section className='dozer'>
            <ul className='dozer__left'>
                <li className='dozer__left__listItem'>
                    <h2 className='dozer__left__heading'>Meet Dozer</h2>
                </li>
                <li className='dozer__left__listItem'>
                    <p className='dozer__left__para'>Offical taste tester of RecipeTin Eats!</p>
                </li>
                <li className='dozer__left__listItem'>
                    <p className='dozer__left__anchor'>Meet Dozer {'>'}</p>
                </li>
            </ul>
            <img 
                className='dozer__right--img'
                src='https://www.recipetineats.com/wp-content/uploads/2018/12/dozer.jpeg?resize=125,125'
            />
        </section>
    )
}

export default Dozer;