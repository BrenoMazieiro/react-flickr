import React, { useState } from 'react';
import CardPicture from '../CardPicture'
import PictureModal from '../PictureModal'

import './styles.scss';

export default function FotoList({ pictures, setPage, page }) {
  const [actualPicture, setActualPicture] = useState({})
  return (
    <>
      <PictureModal actualPicture={actualPicture} setActualPicture={setActualPicture}/>
      <div id="FootList">
        {
          pictures.map((pic) => {
            return < CardPicture
              key={pic.id}
              title={pic.title}
              img={'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'}
              author={pic.ownername}
              postedDate={pic.dateupload}
              setActualPicture={setActualPicture}
            />
          })
        }
      </div>     
      <div id="loadmore" onClick={() => setPage(page + 1)}>Load more...</div>
    </>
  );
}
