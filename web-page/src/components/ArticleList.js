import ArticleItem from "@/components/ArticleItem";
import articleStyles from "../Styles/Article.modules.css";

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => (
                // eslint-disable-next-line react/jsx-key
                <ArticleItem article={article}/>
            ))}

        </div>
    );
};

export default ArticleList;
