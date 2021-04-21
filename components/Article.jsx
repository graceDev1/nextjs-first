import styleArticle from '../styles/Article.module.css';
import ArticlesItem from './ArticlesItem';

function Article({articles}) { 
    return (
        <div className={styleArticle.grid}>
             { articles.map( (article, index) => (
                 <ArticlesItem article={article} key={index}/>
             ))}
        </div>
    )
}

export default Article
