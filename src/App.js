import SingleMovieCard from './components/SingleMovieCard';

function App() {

  const movieData = [
    {
        "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXyZFQsba4fztrQi8YKhMhZ0Tn9VQ44RWr5B5noU&s",
        "poster2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuDmzGlPJb6bFaUq9eFjBhWZFqJ2US7ulEI2m3Rg&s",
        "title":"Bright",
        "releaseYear":"2017",
        "actor":"David Ayer",
        "duration":"1117 min",
        "type":"Action,Crime,Fantasy",
        "description":"Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
    },
    {
        "poster1":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjqB_rjsDN7lQtyy9YEtcEjoS-eg-B0NScCDpkqc&s",
        "poster2":"https://assets.teenvogue.com/photos/59c43eb41291e33b6a44b667/16:9/w_2560%2Cc_limit/lara-lede.jpg",
        "title":"Tomb Raider",
        "releaseYear":"2018",
        "actor":"Roar Uthaug",
        "duration":"125 min",
        "type":"Action, Fantasy",
        "description":"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    }
];



  return (
    <div className="container">
      {
        movieData.map((single_card,idx) => {
          return(
            <SingleMovieCard data={single_card} key={idx}/>
          )
        })
      }
      
    
      
    </div>
  );
}

export default App;
