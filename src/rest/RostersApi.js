const ROSTERS_ENPOINT = 'https://63bf5e66a177ed68abaff54a.mockapi.io/rosters';

class RostersApi {
    get = async () => {
        try {
            const resp = await fetch(ROSTERS_ENPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('FetchRosters threw an error.', e)
        }
    }

    put = async (roster) => {
        try {
            const resp = await fetch(`${ROSTERS_ENPOINT}/${roster.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(roster)
            });
            return await resp.json();
        } catch (e) {
            console.log('Updating rosters threw an error.', e)
        }
    }

    create = async (roster) => {
        try {
            const resp = await fetch(ROSTERS_ENPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(roster)
            });
            return resp;
        } catch (e) {
            console.log('Creating rosters threw an error.', e)
        }
    }

    delete = async (id) => {
        try {
            const resp = await fetch(`${ROSTERS_ENPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await resp.json();
            return data;
        }
        catch (e) {
            console.log('Deleting a Roster threw an error.', e)
        }
    }

}

export const rostersApi = new RostersApi();