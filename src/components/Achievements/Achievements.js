import React from 'react';
import AchievementsItem from './AchievementsItem';
import happy from '../../images/happy@2x.png';
import marketing from '../../images/marketing@2x.png';
import surface from '../../images/surface1@2x.png';
import transportation from '../../images/transportation@2x.png';

const achievements = [
    {
        icon: {happy},
        count: 700,
        title: "Happy Clients"
    },
    {
        icon: {marketing},
        count: 140,
        title: "Projects Completed"
    },
    {
        icon: {surface},
        count: 25,
        title: "Crazy Minds"
    },
    {
        icon: {transportation},
        count: 75,
        title: "Running Projects"
    }
]
const Achievements = () => {
    return (
        <div className="container row">
            <div className="col-md-5">
                <h1>Our Achievements</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
            </div>
            <div className="col-md-7 row">
                {
                    achievements.map((achievement, idx) => <AchievementsItem key={idx} achievement={achievement}/>)
                }
            </div>
        </div>
    );
};

export default Achievements;