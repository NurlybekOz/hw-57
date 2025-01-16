

import { useState } from "react";
import {User, UserMutation} from "../../types";

interface UserForm {
    onSubmitForm: (newUser: User) => void;
}

const UserForm: React.FC<UserForm> = ({onSubmitForm}) => {

    const [form, setForm] = useState<UserMutation & {checked: boolean}>({
        name: '',
        role: '',
        email: '',
        checked: false,
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value} = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    }
    const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setForm((prevState) => ({ ...prevState, checked }));
    }
    const onSubmit = (e: React.FormEvent) => {
        if (!form.name || !form.email || !form.role) {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        onSubmitForm({id: String(new Date().toISOString()), ...form});
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row mb-3">
                <label htmlFor="name" className="col-2 col-form-label">Name</label>
                <div className="col-10">
                    <input type="text"
                           className="form-control"
                           id="name"
                           name='name'
                           value={form.name}
                           onChange={inputChangeHandler} />

                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-2 col-form-label">Email</label>
                <div className="col-10">
                    <input type="email"
                           placeholder='example@gmail.com'
                           className="form-control"
                           name="email"
                           id="email"
                           value={form.email}
                    onChange={inputChangeHandler}
                    />

                </div>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input"
                       type="checkbox"
                       name="check"
                       id="check"
                       checked={form.checked}
                       onChange={checkboxChangeHandler}
                />

                <label className="form-check-label" htmlFor="check">
                    Active
                </label>
            </div>
            <div className='mb-3'>
                <select className="form-select"
                        name="role"
                        value={form.role || 'select'}
                        onChange={inputChangeHandler}>
                    <option disabled value='select'>Select role</option>
                    <option value='user'>user</option>
                    <option value='editor'>editor</option>
                    <option value='admin'>admin</option>
                </select>
            </div>


            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
};

export default UserForm;