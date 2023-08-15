import sass from "../sass/components/tags.module.scss";

const Tags = ({ tags }) => {
  return <span className={sass.tags}>{tags}</span>;
};

export default Tags;
