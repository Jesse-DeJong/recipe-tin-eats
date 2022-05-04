import '../styles/reset.css';
import '../styles/style.css';
import AuthorCard from './authorcard';
import Dozer from './dozer';
import Search from './search';
import Signup from './signup';

const OneThird = () => {
    return (
        <section className='onethird'>
            <Search/>
            <AuthorCard
                title={`Hi, I'm Nagi!`}
                description={`I believe you can make great food with everyday ingredients even if you’re short on time and cost conscious. You just need to cook clever and get creative!`}
                img='https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=125,125'
            />
            <Signup/>
            <Dozer/>
        </section>
    )
}

export default OneThird;