import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector} from "react-redux";
import { clearerrors, resetPassword } from "../../actions/userAction";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector((state) => state.forgotPassword);
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearerrors());
        }

        if (success) {
          console.log('password changed')
            alert.success('Password changed successfully');
            navigate('/users/login');
        }
    }, [dispatch, alert, error, success, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('password', password);
        formData.set('passwordConfirm', confirmPassword);

        dispatch(resetPassword(token, formData));
    };

    return (
        <>
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">New Password</h1>
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password_field">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password_field"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            id="new_password_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            Set Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
