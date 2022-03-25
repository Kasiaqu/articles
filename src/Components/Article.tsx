import { article } from "../models/article";

export const Article = ({ id, title, body }: article): JSX.Element => {
  return (
    <div>
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};
