import React from 'react';

const AchievementsItem = ({achievement}) => {
    const{icon, count, title} = achievement;

    return (
        <div className="col-md-6">
            <div className="bg-white">
                <img src={icon} alt=""/>
                <h2>{count}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default AchievementsItem;