import '../styles/reset.css';
import '../styles/style.css';

import Nav from '../components/nav';
import Linebreak from '../components/linebreak';

import CardAdList from '../components/cardAdList';
import firstData from '../data/firstCardData';

const Home = () => {
    return (
        <>
            <Nav />

            <section className='home__greyback'>
                <section className='home__card_ad'>
                    <CardAdList firstCardData={firstData}/>
                </section>
            </section>

            <Linebreak />
        </>
    )
}

export default Home;