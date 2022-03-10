import React from 'react';

const Formation = ({ courses }) => {
    return (
        <div className="container row wrap w-90 center p-10" id="formation">
            {
                courses.map((course, index) => (
                    <div className="card p-10 w-30 course-card zoom" key={`formation_${index}`}>
                        <div className="m-5 fs-16 bold fc-primary">{ course.school }</div>
                        <div className="m-5 fs-14 bold">{ course.course }</div>
                        <div className="m-5 fs-14">{ course.duration }</div>
                        <div className="m-5 fs-12">
                            { course.description }
                        </div>                    
                    </div>
                ))
            }              
        </div>
    );
}
 
export default Formation;
