export const Card = ({ id, title, body }) => (
  <div className="mb-4">
    <h2 className="font-bold text-[1.5rem]">{`${id} ${title}`}</h2>
    <p>{body}</p>
  </div>
);

export const Post = ({ post }) => (
  <div>
    {post.map((el) => (
      <Card key={el.id} id={el.id} title={el.title} body={el.body} />
    ))}
  </div>
);

export const Button = ({ onClick, children }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
);
