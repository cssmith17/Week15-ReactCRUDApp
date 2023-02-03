import React from 'react';
import { NewPlayerForm } from './NewPlayerForm';

export const Roster = (props) => {
    const { roster, updateRoster, deleteRoster } = props;

    const deletePlayer = (playerId) => {
        const updatedRoster = {
            ...roster,
            players: roster.players.filter((x) => x.id !== playerId)
        };
        updateRoster(updatedRoster);
    };

    const addNewPlayer = (player) => updateRoster({...roster, players: [...roster.players, player]});

    const players = () => (
        <ul className="list-group">
        {roster.players.map((player, index) => (
            <li className="list-group-item list-group-item-info" key={index}>
                <label>{`${player.name}`}</label>
                <label className="spacing">Age:{`${player.age}`}</label>
                <label className="spacing">Primary Classes: {`${player.primary}`}</label>
                <label className="spacing">Secondary Classes: {`${player.secondary}`}</label>
                <button className="btn btn-rounded btn-success button-spacing" onClick={(e) => deletePlayer(player.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );

    const deleteClick = (e) => {
        deleteRoster(roster.id)
    }

    return (
        <div className="card">
            <div className="card-header"><h1>{roster.name}</h1></div>
                <div className="card-body">
                {
                    players({ players, rosterId: roster.id, deletePlayer})
                }
                </div>
                <div className="card-footer">
            <NewPlayerForm addNewPlayer={addNewPlayer} />
        </div>
        <button className="btn btn-rounded  btn-danger" onClick={deleteClick}>Delete Roster</button>
    </div>
    )

};