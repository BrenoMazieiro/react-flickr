import React from 'react';
import './style.scss';


export default function CardPicture({ id, title, img, author, postedDate, setActualPicture }) {
  return (
    <div className="card-pictures">
      {img && (
        <div className="img">
          <a
            href="#show"
            className="read-more"
            onClick={() => {
              setActualPicture({
                id,
                title,
                img,
                author,
                postedDate
              })
            }}
          >
            Info
          </a>
          <div className="img-container" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
      )}
      <div className="author">
        <div className="name">
          <div>{title}</div>
          <div><strong>by</strong> {author}</div>
        </div>
        <p className="heart">
          <span className="material-icons">
            favorite
          </span>
        </p>
      </div>
    </div>
  );
}
