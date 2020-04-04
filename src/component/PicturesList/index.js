import React from 'react';
import CardPicture from '../CardPicture'

import './styles.css';

export default function FotoList({ pictures, setPage, page }) {
  return (
    <>
      <div id="FootList">
        {
          pictures.map((pic) => {
            return < CardPicture
              key={pic.id}
              title={pic.title}
              img={'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'}
              author={pic.ownername}
            />
          })
        }
      </div>
      <div id="loadmore" onClick={() => setPage(page + 1)}>Load more...</div>
    </>
  );
}
