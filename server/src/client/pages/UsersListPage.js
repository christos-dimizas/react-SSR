import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

class UsersListPage extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.fetchUsers();
        }
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                List of Users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

function loadData(store) {
    // this function is useful for initializing the component with data when it is rendered from the server side.
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, {fetchUsers})(UsersListPage),
    loadData: loadData,
};