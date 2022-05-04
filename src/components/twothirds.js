import '../styles/reset.css';
import '../styles/style.css';

import BigCard from './bigCard';

import CardArticleList from '../components/cardArticleList';
import secondData from '../data/secondCardData';

const TwoThirds = () => {
    return (
        <section className='twothirds'>
            <h2 className='twothirds__heading'>LATEST RECIPES</h2>
            <BigCard
                img='https://www.recipetineats.com/wp-content/uploads/2022/03/Nagi-manuscript-1.jpg?resize=900,900'
                title='4 month catch up!!!'
                description={`I'M STILL HERE! How are you?? I've missed chatting to you! Here's what's been going down in my world. Tell me what you've been up to - I want to know! All cookbook ...`}
                category='COOKBOOK'
            />
            <section className='twothirds__cardarticle'>
                <CardArticleList secondCardData={secondData}/>
            </section>
            <p>BROWSE ALL LATEST POSTS {'>'}</p>
        </section>
    )
}

export default TwoThirds;