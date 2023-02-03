import React from 'react';
import { Roster } from './Roster';
import { rostersApi } from '../rest/RostersApi';
import { NewRosterForm } from './NewRosterForm';

export class RostersList extends React.Component {
    state = {
        rosters: []
    };

    componentDidMount() {
        this.fetchRosters();
    };

    fetchRosters = async () => {
        const rosters = await rostersApi.get();
        this.setState({ rosters });
    };

    updateRoster= async (updatedRoster) => {
        await rostersApi.put(updatedRoster);
        this.fetchRosters();
    };

    createRoster = async (newRoster) => {
        await rostersApi.create(newRoster);
        this.fetchRosters();
        document.getElementById("create-roster").value = '';
    };

    deleteRoster = async (id) => {
        await rostersApi.delete(id);
        this.fetchRosters();
    }

    render() {
        return (
            <div className="roster-list">
                <NewRosterForm fetchRosters={this.fetchRosters} createRoster={this.createRoster} />
                {
                    this.state.rosters.map((roster) => (
                        <Roster roster={roster} key={roster.id} updateRoster={this.updateRoster} deleteRoster={this.deleteRoster} />
                    ))}
            </div>
        );
    }
}

