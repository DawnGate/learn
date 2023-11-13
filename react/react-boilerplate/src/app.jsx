import Button from 'react-bootstrap/Button';

import imageFirst from './assets/images/1.jpg';
import imageSecond from './assets/images/2.jpg';

function App() {
  return (
    <div>
      <h1>This is App</h1>

      <Button>This button from bootstrap</Button>

      <div className="content">
        <div className="content_img">
          <img src={imageFirst} alt="Demo" />
        </div>
        <div className="content_img">
          <img src={imageSecond} alt="Demo1" />
        </div>
      </div>
    </div>
  );
}

export default App;
