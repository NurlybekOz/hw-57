import {User} from "../../types";

interface Props {
    user: User;
}


const UserItem:React.FC<Props> = ({user}) => {
    return (
                <div className="card text-center mb-3">
                    <div className="card-body">
                        <h5 className="card-title">name: {user.name}</h5>
                        <p className="card-text">active: {user.checked ? 'yes' : 'no'}</p>
                        <p className="card-text">email: {user.email}</p>
                        <p className="card-text">role: {user.role}</p>
                    </div>
                </div>
    );
};

export default UserItem;