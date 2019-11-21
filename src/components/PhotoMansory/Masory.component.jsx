import React from 'react';
import Masonry from 'masonry-layout';
import { Wrapper } from './Masonry.styled'
class MansoryLayout extends React.Component {

    componentDidMount(){
        const elem = document.querySelector('.grid');
        const msnry = new Masonry( elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 160,
        percentPosition: true
        });
    }
    render(){

        return(
            <Wrapper>
            <div className="grid">
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2 grid-item--height2"></div>
                <div className="grid-item grid-item--height3"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--width3"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item grid-item--width2 grid-item--height3"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--width2 grid-item--height2"></div>
                <div className="grid-item grid-item--width2"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height3"></div>
                <div className="grid-item grid-item--height2"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item grid-item--height2"></div>
            </div>
            
            </Wrapper>
        )
    }
}

export default MansoryLayout;
/*
<div className='grid'>

                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-photo10-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot11-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot12-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot12-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot13-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot14-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot15-large.jpg' alt='latest' />  
                </div>
                    
                
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot16-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot17-large.jpg' alt='latest' />
                </div>
                <div className='grid-item'>
                    <img src='https://html.crumina.net/html-olympus/img/last-phot18-large.jpg' alt='latest' />  
                </div>   
                   
            </div>

*/