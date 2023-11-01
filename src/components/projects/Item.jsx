import PropTypes from "prop-types";
import { FiGithub } from "react-icons/fi";

const Item = ({ name, language, description }) => {
  return (
    <div className="card border bg-base-200 border-base-300 rounded-md shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <p className="card-title text-sm">
            <FiGithub /> {name}
          </p>
        </div>
        <div className={`badge badge-neutral`}>{language}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string,
};

export default Item;
