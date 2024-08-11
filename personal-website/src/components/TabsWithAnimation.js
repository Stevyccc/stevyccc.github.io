import React, { useState } from 'react';
import Button from './Button'; // Corrected spelling from 'Botton' to 'Button'
import AnimatedTab from './AnimatedTab';
import Tab1 from './Tab1';
import Tab3 from './Tab3';

function TabsWithAnimation() {
    const [activeTab, setActiveTab] = useState('1');
    const [key, setKey] = useState(0);

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
            if (tab === '2') { // Reset the animated tab when switching to it
                setKey(prevKey => prevKey + 1);
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <Button
                    label='Home Page'
                    isActive={activeTab === '1'}
                    onClick={() => toggle('1')}
                />
                <Button
                    label='Portfolio'
                    isActive={activeTab === '2'}
                    onClick={() => toggle('2')}
                />
                <Button
                    label='More'
                    isActive={activeTab === '3'}
                    onClick={() => toggle('3')}
                />
            </div>
            <>
                {activeTab === '1' && <Tab1 />}
                {activeTab === '2' && <AnimatedTab key={key} />}
                {activeTab === '3' && <Tab3 />}
            </>
        </>
    );
}

export default TabsWithAnimation;