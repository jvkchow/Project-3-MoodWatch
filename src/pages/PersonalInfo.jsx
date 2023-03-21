import { PhoneScreen } from '../components/PhoneScreen';
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../components/SubmitButton';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const PersonalInfo = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(UserContext);
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        return navigate('/settings');
    };

    return (
    <PhoneScreen>
        <div style={{...centerStyle, flexDirection: 'column', alignItems: 'center'}}>
            <img src='logo.jpg' style={{ width: '200px' }} alt='logo' />
        </div>
        <form onSubmit={handleSubmit}>
            <h2>E-mail:
                <br/>
                <input 
                    type='email' 
                    id= 'textbox'
                    value={userInfo.email}
                    onChange={(event)=>
                        setUserInfo((prev) => {
                            return {...prev, email: event.target.value};
                        })
                    }
                />
            </h2>
            <h2>Password:
                <br/>
                <input 
                    type='password' 
                    id= 'textbox'
                    value={userInfo.password}
                    onChange={(event)=>
                        setUserInfo((prev) => {
                            return {...prev, password: event.target.value};
                        })
                    }
                />
            </h2>
            <h2>Name:
                <br/>
                <input 
                    type='firstName' 
                    id= 'textbox'
                    value={userInfo.firstName}
                    onChange={(event)=>
                        setUserInfo((prev) => {
                            return {...prev, firstName: event.target.value};
                        })
                    }
                />
            </h2>
            <h2>Age:
                <br/>
                <input 
                    type='age' 
                    id= 'textbox'
                    value={userInfo.age}
                    onChange={(event)=>
                        setUserInfo((prev) => {
                            return {...prev, age: event.target.value};
                        })
                    }
                />
            </h2>
            <div style={{...centerStyle, flexDirection: 'column', alignItems: 'center'}}>
                <SubmitButton type='submit' label='Save Changes'/>
            </div>
        </form>
    </PhoneScreen>
    );
};