import "../../App.css";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/cats");
  };

  return (
    <div className="App">
      <div className="content-box">
        <h1>The Cat World</h1>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" onClick={handleButtonClick}>
            Go to Images
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Home;
