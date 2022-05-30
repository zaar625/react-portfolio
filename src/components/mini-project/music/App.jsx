import React ,{useState, useEffect}from 'react'
import Player from './components/Player';
import './app.scss'

const ProjectOne = () => {
    const [songs, setSongs] = useState([
      {
        title: "Forget me too ft. Halsey",
        artist: "Machine Gun Kelly",
        img_src: require('./images/song-1.jpg'),
        src: require('./music/on-n-on.mp3')
      },
      {
        title: "Song 2",
        artist: "Artist 2",
        img_src: require('./images/song-2.jpg'),
        src: require('./music/somebody-new.mp3')
      },
      {
        title: "Song 3",
        artist: "Artist 3",
        img_src: require('./images/song-3.jpg'),
        src: require('./music/on-n-on.mp3')
      },
      {
        title: "Song 4",
        artist: "Artist 4",
        img_src: require('./images/song-4.jpg'),
        src: require('./music/somebody-new.mp3')
      }
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(()=>{
      setNextSongIndex(()=>{
        if(currentSongIndex + 1 > songs.length -1 ){
          return 0;
        }else {
          return currentSongIndex + 1;
        }
      })
    },[currentSongIndex])

  return (
    <div className='music cardstyle col-3 col-md-12 '>
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default ProjectOne
