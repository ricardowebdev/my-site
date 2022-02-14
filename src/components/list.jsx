import React from 'react';

const List = ({itens}) => {
    return (
        <div className="container w-100 center row wrap">
            {
                itens.map((item, index) => (
                    <div className="item w-30 list-item" key={`infoItem_${index}`}>

                        { 
                            item.content ?
                            <div>
                                <div className={`bold ${item.classTitle}`}>
                                    <i className={`fa ${item.classIcon}`} ></i> {item.title}
                                </div>
                                <div className="m-4 fs-12">
                                    <span className="bold">
                                        <a href={item.link} target="_blank" rel="noreferrer" className="breakline list-text" title={item.title}> {item.content}</a>
                                    </span>                                
                                </div>
                            </div>
                            :
                            <div>
                                <div className={`bold ${item.classTitle}`}>
                                    <a href={item.link} target="_blank" rel="noreferrer" className="breakline" title={item.title}>
                                        <i className={`fa ${item.classIcon} fs-14 fc-primary`} ></i>
                                        <span className="m-2 fc-primary fs-14">{item.title}</span>
                                    </a>
                                </div>
                            </div>                            
                        }
                    </div>                    
                ))
            }                     
        </div>  
    );
}
 
export default List;