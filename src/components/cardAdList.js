import '../styles/reset.css';
import '../styles/style.css';

import CardAd from './cardAd';

const CardAdList = ({ firstCardData }) => {
    return (
        <>
            {firstCardData.map( (recipe, index) => {
                return (
                    <CardAd
                        img={recipe.img}
                        category={recipe.category}
                        title={recipe.title}
                        description={recipe.description}
                        key={index}
                    />
                )
            })}
        </>
    )
}

export default CardAdList;