import React, { useState } from 'react';
import { rostersApi } from "../rest/RostersApi";

export const NewRosterForm = (props) => {
    const [name, setName] = useState('');
    

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
        props.createRoster({ name: name, players: [] });
        setName('');
        } else {
        console.log('Invalid input');
        };
    }

    return (
        <div className="card">
            <div className="card-header"> <h3>Add a Roster</h3></div>
            <div className="card-body">
                <form className="form-control" onSubmit={onSubmit}>
                    <input 
                    id="create-roster"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}></input>
                <button className="btn btn-rounded btn-primary" type="submit">Create New Roster</button>
                </form>
            </div>
        </div>
    )
    
}