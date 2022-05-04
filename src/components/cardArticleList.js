import '../styles/reset.css';
import '../styles/style.css';

import CardArticle from './cardArticle';

const CardArticleList = ({ secondCardData }) => {
    return (
        <>
            {secondCardData.map( (recipe, index) => {
                return (
                    <CardArticle
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

export default CardArticleList;