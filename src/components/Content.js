import React from 'react';
import img1 from '../images/bird111.jpeg';
import img2 from '../images/bird11.jpeg';
import img3 from '../images/bird1.jpeg';

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={img1} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Lilac-breasted roller</h2>
                    <p className="mb-2">The average size of the Lilac Breasted Roller is 14.5 inches</p>
                    <span>$ 36</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={img2} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Finches</h2>
                    <p className="mb-2"> Collared grosbeak: 22 – 24 cm, Lesser goldfinch: 9 – 12 cm, Andean siskin: 9.5 – 11 cm</p>
                    <span>$ 32</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={img3} alt="egg" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Pigeon</h2>
                    <p className="mb-2">Marquesan imperial pigeon: 900 g, Western crowned pigeon: 2.1 kg</p>
                    <span>$ 35</span>
                </div>
            </div>
        </>
    );
};

export default Content;