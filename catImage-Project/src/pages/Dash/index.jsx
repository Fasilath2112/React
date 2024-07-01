import '../../App.css'; 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatImageAsync, selectCatImage } from '../../store/catsl';

const Dashboard = () => {
  const dispatch = useDispatch();
  const catImage = useSelector(selectCatImage);
  const isLoading = useSelector((state) => state.cat.status);

  useEffect(() => {
    dispatch(fetchCatImageAsync());
  }, [dispatch]);

  const fetchNewCatImage = () => {
    dispatch(fetchCatImageAsync());
  };

  return (
    <div className="App">
      <h1>Cat Image Fetcher</h1>
      <button onClick={fetchNewCatImage}>New Image</button>
      {isLoading === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <div id="cat-image-container">
          {catImage && <img src={catImage.url} alt="Cat" />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
