import React from 'react';

const Footer = ({ copyright, itens }) => {
    return (
        <footer>
            <div className="container p-5 no-margin fc-white item-center">
                <div className="item p-5 w-60 fs-14">
                    { copyright }
                </div>
                <div className="item text-end p-5 fs-22 w-40">
                    { 
                        itens.map(item => (
                            <a href={item.link} target="_blank" rel="noreferrer" title={item.alt || ''} key={`link_footer_${item.icon}`} className="fc-white">
                                <i className={`pr-5 fa ${item.icon}`}></i>
                            </a>
                        ))                    
                    }                    
                </div>
            </div>            
        </footer>
    );
}
 
export default Footer;