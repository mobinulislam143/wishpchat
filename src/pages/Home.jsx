import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

function Home(props) {
    return (
        <div className='home'>
           <div className='container'>
                <Sidebar/>
                <Chat/>
           </div>
        <div className='footer'>
            <p>All right are reserved by @mobinulislam</p>
        </div>
        </div>
    );
}

export default Home;