import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Main from "./components/Main/Main";
import { useState } from "react";
import Search from "./components/Navbar/Search/Search";
import NumResult from "./components/Navbar/Search/NumResult";
import Box from "./components/Main/Box/Box";
import AnimeList from "./components/Main/Box/AnimeList/AnimeList";
import AnimeDetail from "./components/Main/Box/AnimeDetail";

const animesData = [
  {
    mal_id: 21,
    title: "One Piece",
    year: 1999,
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    score: 8.71,
    synopsis:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
  },
  {
    mal_id: 20,
    title: "Naruto",
    year: 2002,
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    score: 8.71,
    synopsis:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
  },
  {
    mal_id: 269,
    title: "Bleach",
    year: 2004,
    image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    score: 8.71,
    synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },
  {
    mal_id: 31964,
    title: "Boku no Hero Academia",
    year: 2016,
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    score: 8.71,
    synopsis:
      'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
  },
  {
    mal_id: 61316,
    title: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
    year: 2026,
    image: "https://cdn.myanimelist.net/images/anime/1540/155824.jpg",
    score: 9.2,
    synopsis:
      "In the deadly battle at the Watergate City of Priestella, Subaru and his allies barely emerged victorious—but their triumph came at a great cost. Through the 'Authority of Gluttony,' Rem was put into suspended animation, while Crusch's memories and even Julius's name were devoured. As he searches for a way to save them, Subaru learns of the 'Sage' Shaula—an all-seeing being said to possess every form of knowledge. His next destination is the Pleiades Watchtower, home to the Sage, the farthest tower standing in the vast, uncharted desert known as the Auguria Dunes—a place so perilous that even the mightiest 'Sword Saint,' Reinhard, failed to conquer it. The fury of nature, unknown magical beasts, and unimaginable dangers lie ahead. Together with his friends, Subaru embarks on a life-risking journey to reclaim what was lost.",
  },
  {
    mal_id: 61469,
    title: "Steel Ball Run: JoJo no Kimyou na Bouken",
    year: 2026,
    image: "https://cdn.myanimelist.net/images/anime/1448/154111.jpg",
    score: 9.11,
    synopsis:
      "In the American Old West, the world's greatest race is about to begin. Thousands line up in San Diego to travel over six thousand kilometers for a chance to win the grand prize of fifty million dollars. With the era of the horse reaching its end, contestants are allowed to use any kind of vehicle they wish. Competitors will have to endure grueling conditions, traveling up to a hundred kilometers a day through uncharted wastelands. The Steel Ball Run is truly a one-of-a-kind event. The youthful Johnny Joestar, a crippled former horse racer, has come to San Diego to watch the start of the race. There he encounters Gyro Zeppeli, a racer with two steel balls at his waist instead of a gun. Johnny witnesses Gyro using one of his steel balls to unleash a fantastical power, compelling a man to fire his gun at himself during a duel. In the midst of the action, Johnny happens to touch the steel ball and feels a power surging through his legs, allowing him to stand up for the first time in two years. Vowing to find the secret of the steel balls, Johnny decides to compete in the race, and so begins his bizarre adventure across America on the Steel Ball Run.",
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <NavBar>
        <Search>
          <NumResult animes={animes} />
        </Search>
      </NavBar>
      <Main>
        <Box>
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}
