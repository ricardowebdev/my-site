import React, { Component } from 'react';
import './App.css';
import { getSiteInfo } from './services/siteService';
import Footer from './components/footer';
import Menu from './components/menu';
import About from './components/main/about';
import Proficience from './components/main/proficience';
import Experience from './components/main/experience';
import Formation from './components/main/formation';
import Portifolio from './components/main/portifolio';

class App extends Component {
    state = {
        information: [],
        footer: {
            copyright: '',
            links: []
        },
        menu: [],
        about: {
            title: '',
            content: ''
        },
        competences: [],
        experiences: [],
        formation: [],
        portifolio: [],
        currentLangue: 'BR',
        currentPage: ''
    }

    getInfo = (langue) => {
        const { information, footer, menu, about, competences, experiences, formation, portifolio } = getSiteInfo(langue);
        this.setState({ information, footer, menu, about, competences, experiences, formation, portifolio, currentLangue: langue })

    }

    componentDidMount() {
        this.getInfo(this.state.currentLangue);
    }

    onHandleLangue = (Langue) => {
        this.getInfo(Langue);
    }

    onHandlePage = (link) => {
        this.setState({ currentPage: link });
    }

    render() {
        const { information, footer, menu, about, competences, experiences, formation, portifolio, currentLangue, currentPage } = this.state;
        return (
            <React.Fragment>
                <div className="w-100 item no-margin">
                    <Menu 
                        itens={ menu }
                        onHandleLangue={this.onHandleLangue}
                        currentLangue={currentLangue}
                        onHandlePage={this.onHandlePage}
                        currentPage={currentPage}  />
                </div>

                <div className="main-container w-100 center wrap no-margin center">
                    <About title={about.title} content={about.content} information={ information } />
                    <Proficience competences={ competences } />
                    <Experience experiences={ experiences } />
                    <Formation courses={ formation } />
                    <Portifolio sites={ portifolio } />
                </div>            
                <Footer copyright={ footer.copyright } itens={ footer.links } />
            </React.Fragment>
        )
    }
}
export default App;
