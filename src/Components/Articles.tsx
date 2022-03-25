import { useEffect, useState } from "react";

export const Articles = () => {
  interface articles {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [articles, setArticles] = useState<articles[]>([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setArticles(json));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};
