import '../styles/reset.css';
import '../styles/style.css';

import Nav from '../components/nav';
import Linebreak from '../components/linebreak';
import TwoThirds from '../components/twothirds';
import OneThird from '../components/onethird';

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

            <section className='home__thirds'>
                <TwoThirds/>
                <OneThird/>
            </section>


        </>
    )
}

export default Home;