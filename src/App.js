import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <p className='text-red-600'>Her=llo</p>
      <Link to={"/content"}>
        <Button>Hello</Button>
      </Link>
    </div>
  );
}

export default App;
