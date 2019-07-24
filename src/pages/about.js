import React from 'react';
import { Link } from 'gatsby';
import '../about.scss';

const About = () => (
  <>
    <div className="about-page">
      <div className="about-container">
        <h1 className="content--name">ABOUT</h1>
        <div className="about-content">
          <div className="col-20">
            <div className="content-knowledge">
              <div className="content-knowledge-known">
                <h3>Znam</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>REACT</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                </ul>
              </div>
              <div className="content-knowledge-future">
                <div className="touched">
                  <h3>Korzystałem</h3>
                  <ul>
                    <li>Gulp</li>
                    <li>Vuex</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                  </ul>
                </div>
                <div className="planned">
                  <h3>Interesuje mnie</h3>
                  <ul>
                    <li>GraphQL</li>
                    <li>React Native</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                  </ul>
                </div>
              </div>
            </div>
            <button className="button" type="button">
              Pobierz CV
            </button>
          </div>
          <div className="col-80">
            <div className="main-content">
              <p className="main-content--text">
                Mam na imię Patryk, programowaniem zainteresowałem się niecałe 2
                lata temu. Wyszło to totalnie z przypadku, gdyż zawsze uważałem,
                że programowanie to jest pisanie kodu binarnego z nadzieją na
                efekt. Nie sądziłem, ze mamy do czynienia z czymś tak
                arcy-wciągającym, niczym wirtualne klocki lego. Z czasem
                zacząłem zagłębiać wiedzę i zauważać różnice frontend vs
                backend. Bardzo mi się podobała cała idea tworzenia intuicyjnego
                interfejsu użytkownika, tudzież możliwość tworzenia aplikacji,
                które ułatwią/usprawnią nam życie codzienne!, na samą myśl
                ciarki przechodzą.
              </p>
              <p className="main-content--text">
                Moje doświadczenie na chwilę obecną, to praca głównie w
                Userengage obecnie User.com . Nie ukrywam, że firma korzysta z
                nowych technologii, daje mega kopa jeśli chodzi o rozwój
                programistów, praca z ogromnym wręcz kombajnem. Niestety mój
                kierunek Juniorski był stricte REACTowy, a front w User.com stoi
                na Vue, także liznąłem troszkę tematu, małe update’y. Podobnie
                jak django(Python), bardziej wykorzystywanie pętli czy
                printowanie danych, które przygotowywał backend. Akurat jak
                trafiłem do firmy, to zająłem się pisaniem nowego designu dla
                aplikacji. Aczkolwiek moim głównym tematem i zadaniem było
                napisanie całego frontu na nowo, zaoraniem setek stron i wdrożyć
                nowy design przy użyciu Bootstrap 4, wspierając się Sass. Jeśli
                chodzi o logikę, na froncie aż tak dużo jej nie było, mimo
                wszystko jeśli chodzi o bootstrap to jQuery, małe konfiguracje,
                czy customowe karuzele/hovery. Do tego doszły miedzy innymi QA i
                pobieranie z API informacji o użytkownikach/postach + możliwość
                dodawania nowych postów, usuwanie etc. Standardowy CRUD z
                RestAPI. (https://user.com/en/questions/). Dużo przyjemnej
                roboty, dzięki czemu mocno wjechałem przede wszystkim w
                HTML/CSS, dodatkowo korzystanie z django tagów, js(głównie
                jQuery) i trochę vue. Natłukłem masę templatek i kampanii
                mailingowych jako przykłady dla klientów pod edycje bezpośrednio
                z naszego autorskiego kreatora formularzy. Także dużo pozytywnej
                wiedzy... czas na zmiany :)
              </p>
              <p className="main-content--text">
                Na tym moja żądza poznawania nowych rzeczy się nie kończy.
                Niestety temat frontu jest tak rozległy, że aż ciężko obrać
                swoją ulubioną ścieżkę. Póki co jestem w tak zwanym transie
                programowania, w ostatnim czasie wróciłem do Reacata i natłukłem
                różne projekty, raczej nie duże, żeby móc ogarnąć temat w miare
                szybko, w każdym razie dużo Reacata, sporo Reduxa, troszkę
                Node.js z Expressem, portfolio powsataje z wykorzystaniem
                Gatsby, obecnie przglądam się GraphQL (bardzo ciekawy temat),
                potem chciałbym podziałać z React Native/Flutter, Electron, GSAP
                i szlifować obecne doświadczenie do maximum możliwości
              </p>
            </div>
          </div>
        </div>
        <Link className="home" to="/">
          Home
        </Link>
      </div>
    </div>
  </>
);
export default About;
