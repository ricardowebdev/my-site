import { React, Component } from 'react';
import movendo from '../../img/movendo.png';
import englishreview from '../../img/englishreview.png';
import github from '../../img/github.png';

class Portifolio extends Component {
    render() {
        const { sites } = this.props;
        return (
            <div className="container row wrap w-90 center p-10" id="formation">
                {
                    sites.map((site, index) => (
                        <div className="course-card p-10 w-30 card custom-border" key={index}>
                            <div className="m-5 text-center">
                                <img src={this.getSiteFoto(site.foto)} alt="portifolio" className="responsive" />
                            </div>
            
                            <div className="m-5 fs-16 bold">{site.title}</div>
                            <div className="fs-12 m-5 lh-18">
                                <div dangerouslySetInnerHTML={{__html: site.description}}></div>
                            </div>
                            <div className="fs-12 m-5 lh-18">
                                <a href={site.link} target="_blank" className="bold fc-primary">Link</a>
                            </div>
                        </div>
                    ))
                }                       
            </div>
            
        );
    }

    getSiteFoto(fotoName) {
        let response = '';
        switch(fotoName) {
            case 'movendo':
                response = movendo;
                break;
            case 'englishreview':
                response = englishreview;
                break;
            case 'github':
                response = github;
                break;                                    
        }

        return response;
    }
}
 
export default Portifolio;

