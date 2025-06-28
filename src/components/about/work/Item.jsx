import PropTypes from "prop-types";

const Item = ({ title, role, period, skills }) => {
  return (
    <li data-content="💼" className="step step-accent">
      <div className="card bg-transparent">
        <div className="card-body text-left">
          <p className="card-title link link-hover">{title}</p>
          <p>{role}</p>
          <p>{period}</p>
          <ul className="list-disc">
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  period: PropTypes.string,
  skills: PropTypes.array,
};

export default Item;
