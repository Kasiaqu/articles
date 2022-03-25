import { useEffect, useState } from "react";
import { Article } from "./Article";
import { article } from "../models/article";
import s from "./articlesCounter.module.css";
export const ArticlesCounter = () => {
  const [articles, setArticles] = useState<article[]>([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setArticles(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={s.articlesCounter}>
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          title={article.title}
          body={article.body}
        />
      ))}
    </div>
  );
};
