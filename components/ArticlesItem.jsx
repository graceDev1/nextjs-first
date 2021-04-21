import styleArticle from '../styles/Article.module.css';
import Link from 'next/link';

function ArticlesItem({article}) {
    return (
        <Link href='/article/[id]' as={`/article/${article.id}`}>
            <a className={styleArticle.card} >
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticlesItem
