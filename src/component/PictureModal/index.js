import React from 'react';

import './styles.scss';

export default function PictureModal({ actualPicture, setActualPicture }) {
  const formateDate = (timestamp) => {
    var date = new Date(timestamp * 1000);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  }
  const processImage = () => {
    let output = document.getElementById('domImage')
    output.onload = function() {
      let mat = window.cv.imread(output);
      let dst = new window.cv.Mat();
      window.cv.cvtColor(mat, mat, window.cv.COLOR_RGB2GRAY, 0);
      window.cv.Canny(mat, mat, 100, 100, 3, false);
      window.cv.imshow("canvasOutput", mat);
      mat.delete();
      dst.delete();
    };
    output.src=actualPicture.img
  }
  return (
    <>
      {
        actualPicture.author &&
        <div id="card-picture-modal" onClick={() => setActualPicture({})}>
          <div id="modal-content">
            <div id="picturexxx">
              {/* <div className="img-container" style={{ backgroundImage: `url(${actualPicture.img})` }}></div> */}
              {/* <img id={actualPicture.id} src={actualPicture.img}></img>  */}
              <div>
                <canvas id="canvasOutput" ></canvas>
                {processImage()}
              </div>
            </div>
            <div id="info">
              <p><strong>Title:</strong> {actualPicture.title}</p>
              <p><strong>Posted Date:</strong> {formateDate(actualPicture.postedDate)}</p>
              <p><strong>Owner:</strong> {actualPicture.author}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}
