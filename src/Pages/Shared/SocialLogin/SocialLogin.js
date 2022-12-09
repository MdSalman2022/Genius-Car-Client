import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user)

                // replacement of bellow code is above ^^^^
                /* const currentUser = {
                    email: user.email
                }

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //local storage is not the best place to store jwt token but the easiest
                        localStorage.setItem('genius-token', data.token)
                        // navigate(from, { replace: true })
                    }) */


            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className=' btn btn-ghost '>Google</button>
            </p>

        </div>
    );
};

export default SocialLogin;