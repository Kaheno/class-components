import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// Component => gives access to "this.props"
class Users extends Component {
  constructor() {
    super();
    // Must be named "state", and has to be an "{Object}"
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    // curState === state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    // render() => can have helper vars
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    // .bind(this) => For the function to have access to "this"
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
