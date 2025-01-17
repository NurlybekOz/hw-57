import './App.css'
import {useState} from "react";
import {User} from "./types";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from './components/Users/Users.tsx';


const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prevState => [...prevState, newUser]);
  }
  return (
      <>
        <div className='container'>
          <div className="row mt-3">
            <div className='col-6'>
              <UserForm onSubmitForm={addUser}/>
            </div>
            <div className='col-6'>
                <Users users={users}></Users>
            </div>
          </div>


        </div>
      </>
  )
};

export default App
