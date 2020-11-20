import React from 'react';

const AchievementsItem = ({achievement}) => {
    const{icon, count, title} = achievement;

    return (
        <div className="col-md-6">
            <div className="bg-success d-flex align-items-center radius-div py-4 mb-4 justify-content-center">
                <img style={{height:'55px'}} className="mr-4" src={icon} alt=""/>
                <div>
                    <h2 className="font-weight-bold">{count}+</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementsItem;