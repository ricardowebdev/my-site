import React from 'react';

const List = ({itens}) => {
    return (
        <React.Fragment>
            <div className="container w-100 center row wrap">
                <div className="item w-90 list-title">
                    <h2 className="fc-primary">Contatos</h2>
                </div>
            </div>

            <div className="container w-100 center row wrap">
                {
                    itens.map((item, index) => (
                        <div className="item w-30 list-item color-block shadow" key={`infoItem_${index}`}>

                            { 
                                item.content ?
                                <a href={item.link} target="_blank" rel="noreferrer" className="breakline list-text" title={item.title}>
                                    <div className={`bold ${item.classTitle}`}>
                                        <i className={`fa ${item.classIcon}`} ></i> {item.title}
                                    </div>
                                    <div className="m-4 fs-12">
                                        <span className="bold">
                                            {item.content}
                                        </span>                                
                                    </div>
                                </a>
                                :
                                <a href={item.link} target="_blank" rel="noreferrer" className="breakline" title={item.title}>
                                    <div className={`bold ${item.classTitle}`}>                                    
                                            <i className={`fa ${item.classIcon} fs-14 fc-primary`} ></i>
                                            <span className="m-2 fc-primary fs-14">{item.title}</span>
                                    </div>
                                </a>
                            }
                        </div>                    
                    ))
                }                     
            </div> 
        </React.Fragment> 
    );
}
 
export default List;