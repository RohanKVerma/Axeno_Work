song_json = [
    {
      "title": "Death Bed",
      "artist": "Powfu",
      "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
      "id": "1"
    },
    {
      "title": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
    },
    {
      "title": "Faded",
      "artist": "Alan Walker",
      "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "id": "3"
    },
    {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
    },
    {
      "title": "Solo",
      "artist": "Clean Bandit",
      "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "id": "5"
    },
    {
      "title": "Without Me",
      "artist": "Halsey",
      "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "id": "6"
    }
];

  const idArray = [...new Set(song_json.map(item => item.id))];

  const art = document.querySelector('#album_art');
  const songName = document.querySelector('#song_title');
  const artistName = document.querySelector('#song_artist');
  const player = document.querySelector('#player');
  const playPauseBtn = document.querySelector('#play_pause');
  const loopBtn = document.querySelector('#loop_btn svg');
//   const audio = document.getElementById('player');


  let currentID = 1;

  let currentSong = song_json.find(item => item.id == currentID);
  
  art.src = currentSong.artwork;
  songName.textContent = currentSong.title;
  artistName.textContent = currentSong.artist;
  player.src = currentSong.url;
  
  
  function songTimeUpdate(){
      let currentMin = Math.floor(player.currentTime/60);
      let currentSec = Math.floor(player.currentTime - currentMin*60);    
      let remainingTime = Math.floor(player.duration - player.currentTime);
      let remainingMin = Math.floor(remainingTime/60);
      let remainingSec = Math.floor(remainingTime - remainingMin*60);
      document.querySelector('.escaped').textContent = `${currentMin}:${currentSec}`;
      document.querySelector('.remaining').textContent = `${remainingMin}:${remainingSec}`;
      let width = (player.currentTime/player.duration)*100;
      document.querySelector('.bar').style.width = `${width}%`
      if (player.currentTime == player.duration) {
        next();
      }
      if (player.paused){
          playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#e8eaed"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
          art.classList.remove('active');
    }else{
        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#e8eaed"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>';
        art.classList.add('active');
    }
}
setInterval(songTimeUpdate,1000);

function update(){
  let currentSong = song_json.find(item => item.id == currentID);
  art.src = currentSong.artwork;
  songName.textContent = currentSong.title;
  artistName.textContent = currentSong.artist;
  player.src = currentSong.url;
  player.play();
}

  function next(){
    currentID++;
    if(currentID > idArray.length){
        currentID = 1;
    }
    update();
  }
  function previous(){
    currentID--;
    if(currentID < 1){
        currentID = idArray.length-1;
    }
    update();
  }

  function shuffle(){
    var randomSong = Math.floor(Math.random(idArray) * idArray.length);
    currentID = randomSong;
    update();
}


function loop(){
    if(player.hasAttribute('loop')){
        player.removeAttribute('loop');
        loopBtn.style.background = 'transparent';
        loopBtn.style.fill = 'gray';
    }else{
        player.setAttribute('loop', 'true');
        loopBtn.style.background = '#FF0043';
        loopBtn.style.fill = 'white';
    }
}

function playPause(){
    if (player.paused) {
        player.play();
        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#e8eaed"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>';
    }else{
        player.pause();
        playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#e8eaed"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
    }
}