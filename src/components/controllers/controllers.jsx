import './controllers.css';

const Controllers = ({ onBtnClick }) => {
  return (
    <div className="controllers">
      <i
        onClick={() => onBtnClick('like')}
        className="fa-brands fa-gratipay fa-3x"
      ></i>
      <i
        onClick={() => onBtnClick('unlike')}
        className="fa-solid fa-ban fa-3x"
      ></i>
    </div>
  );
};

export default Controllers;
