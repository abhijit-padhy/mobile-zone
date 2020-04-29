import React, {useState} from 'react'
import './carousal.css';

function Carousal(props) {
  const [imageIndex, setImageIndex] = useState(0);

  const timer = setInterval(() => {
    let length = props.images.length;
    if (imageIndex >= length-1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex+1);
    }
    clearInterval(timer);
  }, 2000);

  return (
    <div className="carousal">
      <div className="container">
        <img data-testid="carousalImg" src={props.images[imageIndex]} alt="loading..." />
      </div>
    </div>
  )
}

export default Carousal
