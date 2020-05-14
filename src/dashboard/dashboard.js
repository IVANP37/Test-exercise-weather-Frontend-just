import React, { Component } from 'react';
import Header from '../component/Header';
import Current from '../component/Current';



class Dashboard extends Component {

    render() {
        return (
            <div>
            <Header />           
            <Current />
            </div>
        );
    }
}

export default Dashboard;