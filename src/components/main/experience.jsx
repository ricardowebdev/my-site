import React from 'react';

const Experience = ({ experiences }) => {
    return (        
        <div className="item column p-10 w-90" id="experiences">
            {
                experiences.map((experience, index) => (
                    <div className="card mb-10 shadow" key={`experience_${index}`}>
                    <div className="m-5 fs-18 fc-primary bold">{experience.title}</div>
                        <div className="m-5 fs-16 bold">{experience.company}</div>
                        <div className="m-5 fs-14">{experience.duration}</div>
                        <div className="m-5 fs-14">{experience.location}</div>
                        <div className="fs-12 m-5 lh-18">
                            { experience.description}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Experience;