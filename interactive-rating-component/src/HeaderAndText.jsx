import "./HeaderAndText.css";
import starIcon from "./images/icon-star.svg";

function HeaderAndText() {
  return (
    <div className="header-and-text-body">
      <img src={starIcon} alt="Star" className="star-icon"/>
      <div className="middle-text">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
    </div>
  );
}

export default HeaderAndText;
