"use client"

import React, { useState } from 'react';
import style from './Tabs.module.scss';

export default function Tabs({tabs}) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabSelect = (id) => {
        setActiveTab(id);
    }

    console.log(tabs.content);

    return (
        <div className={style.tabsContainer}>
            <div className={style.tabs}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id} 
                        className={activeTab === tab.id ? style.activeTab : style.inactiveTab} 
                        onClick={() => handleTabSelect(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={style.tabContent}>
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={activeTab === tab.id ? style.activeContent : style.inactiveContent}
                    >
                        <div key={location.id} className={style.location}>
                            <p>{location.location}</p>
                            <p>{location.name}</p>
                            <p>{location.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};