import React from 'react';
import BR from '../../src/img/BR.png';
import EN from '../../src/img/EN.png';
import FR from '../../src/img/FR.png';

const Menu = ({ itens, onHandleLangue, currentLangue, currentPage, onHandlePage }) => {
    return (
        <div className="container w-100 row menu end wrap item-center no-margin">
            <div  className={currentLangue === 'BR' ?  'item-flag pt-3 li-active' : 'item-flag pt-3'}>
                <img src={BR} alt="Portugues Brasil" className="flag" onClick={ () => onHandleLangue('BR')}/>
            </div>
            <div className={currentLangue === 'EN' ?  'item-flag pt-3 li-active' : 'item-flag pt-3'}>
                <img src={EN} alt="American English" className="flag" onClick={ () => onHandleLangue('EN')} />
            </div>
            <div className={currentLangue === 'FR' ?  'item-flag pt-3 li-active' : 'item-flag pt-3'}>
                <img src={FR} alt="Francais" className="flag" onClick={ () => onHandleLangue('FR')} />
            </div>
            {
                itens.map((item, index) => (
                    <div className={`${item.class}`} key={`menu_${index}`}>
                        <a 
                            href={item.link}
                            title={item.label}
                            className={ currentPage === item.link ? 'item-menu-active' : 'item-menu'}
                            onClick={() => onHandlePage(item.link)}
                        >
                            {item.label}
                        </a>
                    </div>
                ))
            }                    
        </div>        
    );
}
 
export default Menu;