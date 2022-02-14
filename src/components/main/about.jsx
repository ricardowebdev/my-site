import React from 'react';
import List from '../list';

const About = ({ content, title, information }) => {
    return (
        <React.Fragment>
            <div className="item w-90 center card p-10">
                <div className="container row center wrap">
                    <div className="item w-25">
                        <img className="responsive" src="https://media-exp1.licdn.com/dms/image/C4E03AQGqcRhith2dbg/profile-displayphoto-shrink_800_800/0/1517528574591?e=1648684800&v=beta&t=xpksKDuY_RKZcvx-x5J06MK4KSVUU_wHG_JsMPiwpu0" alt="Ricardo dos Santos Souza" />
                    </div>
                    
                    <div className="item w-40 pl-10 about-content">
                        <div className="fs-25 fc-primary">Ricardo dos Santos Souza</div>
                        <div className="fs-14 m-3 mb-10">Full Stack developer</div>

                        <div className="fs-18 m-5 mt-25 fc-primary bold">
                            { title }
                        </div> 

                        <div className="fs-12 m-5 lh-18">
                            { content }
                        </div>
                    </div>
                </div>                      

                <hr />

                <List itens={information} />
            </div>                
        </React.Fragment>            
    );
}
 
export default About;