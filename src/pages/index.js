import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="🌟 Wojciech Smolarek | Pozycjoner stron internetowych i webdeveloper - Jarocin, Poznań"
                    meta={[
                        { name: 'description', content: 'Cześć, mam na imię Wojciech i na co dzień zajmuję się pozycjonowaniem stron internetowych. Ciekawi Cię to co robię? ✅ Sprawdź koniecznie moją witrynę!' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>O mnie</h3>
                                <p>O mnie słów kilka.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Blog</h3>
                                <p>Czym tak na prawdę jest SEO? Ciekawostki, poradniki, informacje.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Współpraca</h3>
                                <p>Masz pomysł na biznes? Pomyślmy razem, co ciekawego możemy stworzyć!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Kontakt</h3>
                                <p>Masz nurtujące pytanie? Napisz do mnie wiadomość.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>SEO • Design • Code</h2>
                            </header>
                            <div class="intro">
                              <h3 class="paragraphHeading">Kim jestem?</h3>
                              <p class="paragraph">Człowiekiem ciekawym świata. Programistą, który nie zaśnie, dopóki nie dowie się, jak działa dany program albo dlaczego ta gra komputerowa jest taka, jaka jest.</p>
                              <h3 class="paragraphHeading">Kim nie jestem?</h3>
                              <p class="paragraph">Typowym nastolatkiem spędzającym całe życie w serwisach społecznościowych. Życie w realu jest zbyt pasjonujące, żeby tracić cenny czas na "wirtual".</p>
                              <h3 class="paragraphHeading">Co robię?</h3>
                              <p class="paragraph list">Wszystko to, czym zajmuje się dyplomowany technik-informatyk, który od dziecka czuł, że jego przeznaczeniem jest programowanie:</p>
                              <ul class="introContainer">
                                <li class="introEl">tworzę strony internetowe, programy, grafiki, </li>
                                <li class="introEl">udzielam się na forach internetowych związanych z programowaniem,</li>
                                <li class="introEl">pomagam innym, rozwiązując ich programistyczne problemy,</li>
                                <li class="introEl">chłonę literaturę fachową, żeby być na bieżąco z najnowszymi trendami.</li>
                              </ul>
                              <h3 class="paragraphHeading">Co mnie pasjonuje?</h3>
                              <p class="paragraph">Sprawianie, by tworzony przeze mnie program działał bezbłędnie. Brzmi prosto, ale każdy, kto zna ten zawód wie, ile przeszkód trzeba nieraz pokonać, by dotrzeć do upragnionego celu.</p>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
