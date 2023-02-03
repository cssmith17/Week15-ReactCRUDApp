import React, { useState } from 'react';

export const NewPlayerForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [primary, setPrimary] = useState('');
    const [secondary, setSecondary] = useState('');

    const handleAgeInput = (e) => {
        const int = parseInt(e.target.value);
        setAge(int >= 0 ? int: '');
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (name && age && primary && secondary) {
            props.addNewPlayer({name, age, primary, secondary});
            setName('');
            setAge('');
            setPrimary('');
            setSecondary('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new Player</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}></input>
                <input
                type='text'
                placeholder='Age'
                onChange={handleAgeInput}
                value={age}></input>
                <input
                type='text'
                placeholder='Primary Classes'
                onChange={(e) => setPrimary(e.target.value)}
                value={primary}></input>
                <input
                type='text'
                placeholder='Secondary Classes'
                onChange={(e) => setSecondary(e.target.value)}
                value={secondary}></input>
                <button type='submit'>Add Player</button>
            </form>
        </div>
    )
};

