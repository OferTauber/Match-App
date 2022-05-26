import './counter.css';

const Counter = () => {
  return (
    <div className="counter">
      <div className="counter-item">
        <i className="fa-solid fa-heart fa-xl"></i>
        <p>2</p>
      </div>

      <div className="counter-item">
        <i className="fa-solid fa-thumbs-down fa-xl"></i>
        <p>4</p>
      </div>
    </div>
  );
};

export default Counter;
