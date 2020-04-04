import React, { useState, useEffect } from 'react';
import SearchBar from './component/SearchBar'
import PicturesList from './component/PicturesList'
import useDebounce from './useDebounce'
import './App.css';
import './global.css'
import {FLICKR_URL,API_KEY,FLICKR_SIG} from './environment'

const App = () => {
  const [pictures, setPictures] = useState([])
  const [search, setSearch] = useState('dog')
  const [page, setPage] = useState(1)
  const [perPage] = useState(50)
  const debouncedSearchTerm = useDebounce(search, 1500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(`${FLICKR_URL}&api_key=${API_KEY}&FLickrApi_sig=${FLICKR_SIG}&nojsoncallback=1&format=json&tags=${search}&page=${page}&per_page=${perPage}&content_type=7&extras=owner_name,date_upload`)
        .then((response) => {
          return response.json()
        })
        .then((images) => {
          page > 1 ?
            setPictures([...pictures, ...images.photos.photo])
          :
            setPictures(images.photos.photo)
          
        })
    } else {
      setPictures([]);
    }
  }, [search, debouncedSearchTerm, page, perPage])

  return (
    <div id="app">
      <main>
        <SearchBar setSearch={setSearch} setPage={setPage} page={page} />
        <PicturesList pictures={pictures} setPage={setPage} page={page}/>
      </main>
    </div>
  );
}

export default App;
