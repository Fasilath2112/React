import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/cats');
  };

  return (
    <div className="content-box">
      <h1>The Cat World</h1>
      <button onClick={handleButtonClick}>Go to Images</button>
    </div>
  );
};

export default Home;
