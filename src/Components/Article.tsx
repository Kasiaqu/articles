import { article } from "../models/article";
import s from "./articlesCounter.module.css";
export const Article = ({ id, title, body }: article): JSX.Element => {
  return (
    <div className={s.article}>
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>
      <button>See more</button>
    </div>
  );
};
