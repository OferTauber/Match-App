import './counter.css';

const Counter = ({ counter }) => {
  return (
    <div className="counter">
      <div className="counter-item">
        <i className="fa-solid fa-heart fa-xl"></i>
        <h3>{counter.like}</h3>
      </div>

      <div className="counter-item">
        <i className="fa-solid fa-thumbs-down fa-xl"></i>
        <h3>{counter.unlike}</h3>
      </div>
    </div>
  );
};

export default Counter;
