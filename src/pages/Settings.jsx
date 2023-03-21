import { PhoneScreen } from '../components/PhoneScreen';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
    const navigate = useNavigate();
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
    <PhoneScreen>
        <div style={{...centerStyle, flexDirection: 'column', alignItems: 'center'}}>
            <img src='logo.jpg' style={{ width: '200px' }} alt='logo' />
        </div>
        
        <h2>Select when to be reminded:
            <br/>
            (we suggest at least twice a day)
        </h2>

    </PhoneScreen>
    );
};