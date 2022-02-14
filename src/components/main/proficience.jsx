import React, { Component } from 'react';

class Proficience extends Component {
    stars = [1,2,3,4,5];

    render() {
        const competences = this.props.competences;
        return (
            <div className="item card w-90 center p-10" id="skills">
                <div className="container row w-100 wrap center">        
                        {
                            competences.map((competence, index) => (
                                <div className="item w-30" key={`competence_${index}`}>
                                    <div className="m-4 fs-14 mt-10 fc-primary bold"  key={`competence_${competence.title}`}>
                                        { competence.title }
                                    </div>
                                    <div className="m-4 fs-12 mb-10" key={`div_star_${competence.title}`}>
                                        { 
                                            this.stars.map((star, index)  =>  (                                                
                                                competence.level + 1 <= star ? 
                                                    <i className="fa fa-star-o" key={`star_${competence.title}_${index}`}></i> : 
                                                    <i className="fa fa-star" key={`star_${competence.title}_${index}`}></i>
                                            ))
                                        }
                                    </div>
                                </div>                         
                            ))                       
                        }
                </div>                    
            </div>
        )
    }
}
 
export default Proficience;