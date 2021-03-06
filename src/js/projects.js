import stream from '../images/stream-platform.png';
import faceDetection from '../images/face-detection.png';
import basicYoutube from '../images/basic-youtube.png';
import deleygram from '../images/delaygram.png';
import photoSearch from '../images/photo-search.png';
import weather from '../images/weather-forecase-browser.png';
import websiteProject from '../images/website-project.png';
import blogPosts from '../images/blog-posts.png';
import chat from '../images/chat.png';

export const projectsInfo = [
  {
    id: 1,
    content: {
      title: 'Stream Platform',
      description:
        'Jest to prosta aplikcja, do ktrej za pomocą programu OBS, możemy strumieniować obraz z komputera, cały, lub wybrany element. Autoryzacja przez goolge auth, dodawanie, usuwanie i edytowanie streamów',
      github: 'https://github.com/kowalus23/stream-platform',
      live: null,
      image: stream,
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
    },
  },
  {
    id: 2,
    content: {
      title: 'Face Detection',
      description:
        'Fajna aplikacja do detekcji twarzy ze zdjęć, bazująca na clarify api, dostępnych jest również wiele innych opcji, jak pobierani kolorów ze zdjęcia etc. Planuje to w przyszłości usprawnić. Dodatkowo mamy system rejestracji i logowania, robiony po stronie servera dzięki express.js i użyciu postgreSQL.',
      github: 'https://github.com/kowalus23/Facial-Detection',
      live: 'https://facial-detection-heroku.herokuapp.com/',
      image: faceDetection,
      technologies: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Redux',
        'Node.js',
        'Express',
        'PostgreSQL',
      ],
    },
  },
  {
    id: 3,
    content: {
      title: 'Delaygram',
      description:
        'Nic innego jak uproszczona wersja instagrama, nie robiłem autoryzacji po użytkowniku, de facto każdy może dodać zdjęcie + opis + komentarze, mamy opcje preview, przed postowaniem, oczywiśćie planuje to z czasem usprawnić. Za baze danych robi mi firebase.',
      github: 'https://github.com/kowalus23/instalike-app',
      live: 'https://kowalus23.github.io/instalike-app/#/',
      image: deleygram,
      technologies: [
        'HTML',
        'CSS',
        'Bootstrap',
        'JS',
        'React',
        'Redux',
        'Firebase',
      ],
    },
  },
  {
    id: 4,
    content: {
      title: 'Weather forecast',
      description:
        'Bardzo uproszczona wersja prognozy pogody, z wykorzystaniem Weather Api, darmowa wersja pozwoliłą na prognoze z 5dni, odczyty w odstępach co 3h. Możemy wybrać kraj, wrzuciłem na szybko 2 dodatkowe poza PL, wpisać miasto i nam wyskoczy pogoda :) ',
      github: 'https://github.com/kowalus23/weather-forecast-browser',
      live: 'https://kowalus23.github.io/weather-forecast-browser',
      image: weather,
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
    },
  },
  {
    id: 5,
    content: {
      title: 'First Project(game)',
      description:
        'Zdecydowanie najbardziej sentymentalny projekt, pierwszy, który stowrzyłem, pisany był w JS, a potem przeniesiony do React, jszcze nie znając Reacta, miałem problemy w sterowaniu i wiele innych, ostatecznie ostatnio go naprawiłem i delikatnie poprawiłem.',
      github: 'https://github.com/kowalus23/Website-Project',
      live: null,
      image: websiteProject,
      technologies: ['HTML', 'Sass', 'JS', 'React'],
    },
  },
  {
    id: 6,
    content: {
      title: 'Basic Youtube',
      description:
        'No i mamy prostą wersje Youtube, oczywiście api od google, tradycyjny search bar, jedyna ciekawostka jest dodatkowy przycisk DARK-MODE, normalnie szał na dzielnicy. Wersja natywna mogłaby wprowadzić słuchanie na zgaszonym ekranie smartfona, to byłoby ciekawe rozwiązanie.',
      github: 'https://github.com/kowalus23/basic-youtube',
      live: 'https://kowalus23.github.io/basic-youtube/',
      image: basicYoutube,
      technologies: ['HTML', 'CSS', 'JS', 'React'],
    },
  },
  {
    id: 7,
    content: {
      title: 'Simple Chat',
      description:
        'Prosty chat, dzięki któremu możemy rozmawiać z innymi użytkownikami, na różnych kanałach czy w różnych pokojach, później można dodać lepszą autoryzacje + przypisać osoby do konkretnych pokojów.',
      github: 'https://github.com/kowalus23/simple-chat',
      live: null,
      image: chat,
      technologies: ['HTML', 'CSS', 'JS', 'Socket.io', 'Node.js'],
    },
  },
  {
    id: 8,
    content: {
      title: 'Blog posts',
      description:
        'Tym razem mamy do czynienia z typową listą z informacjami, aka post, możemy dodawać, usuwać, bazuje to na fake-owym db od heroku, max do 10 obiektów. Jeden stworzyłem lokalny, żeby sprawdzić jak sprawdza się service worker... lecz brakuje mu cache-owania api',
      github: 'https://github.com/kowalus23/blog-posts',
      live: 'https://kowalus23.github.io/blog-posts/#/',
      image: blogPosts,
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
    },
  },
  {
    id: 9,
    content: {
      title: 'Photo search',
      description:
        'Nie ukrywam - projekt stricte lorem ipsum dla portfolio, zwykły searcher zdjęć bazujący na api od unsplash, wiele doda nie mogę - wpisujemy po angielsku nazwę, która nas inetresuje i wyszukuje nam 30 zdjęć, just like that...',
      github: 'https://github.com/kowalus23/photo-search',
      live: 'https://kowalus23.github.io/photo-search',
      image: photoSearch,
      technologies: ['HTML', 'CSS', 'JS', 'React'],
    },
  },
];
