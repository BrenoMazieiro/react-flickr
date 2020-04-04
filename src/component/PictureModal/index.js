import React from 'react';

import './styles.scss';

export default function PictureModal({ actualPicture, setActualPicture }) {
  const formateDate = (timestamp) => {
    var date = new Date(timestamp * 1000);
    return `${date.getDay()}/${date.getMonth  ()}/${date.getFullYear()}`
  }
  return (
    <>
      {
        actualPicture.author &&
        <div id="card-picture-modal" onClick={() => setActualPicture({})}>
          <div id="modal-content">
            <div id="picture">
              <div className="img-container" style={{ backgroundImage: `url(${actualPicture.img})` }}></div>
              {/* <img src={actualPicture.img}></img>  */}
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
