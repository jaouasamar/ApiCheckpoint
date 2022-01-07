
import UserItem from "../userItem/UserItem";
import "./UserList.css";

const UserList = ({users}) => {
 

  return (
    <div className="users">
    
     {users.map((user,index) =>( <UserItem key={index} user={user}/> )) }
    </div>
  );
};


export default UserList;
