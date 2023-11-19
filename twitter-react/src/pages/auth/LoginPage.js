import { useState, useContext } from 'react';
import Button from '../../components/Button'
import { login } from './service';
import { AuthContext } from './context';


function LoginPage() {
    const {onLogin} = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        username: 'Alex',
        password: '',
      });

    const handleSubmit = async (event) => {
        event.preventDefault();

        await login(credentials);

        onLogin();
    };

    const handleChange = (event) => {
        setCredentials(currentCredentials => ({
            ...currentCredentials,
            [event.target.name]: event.target.value,
        }));
    };


    // cada vez que el estado ambia y pasa por esta linea se está recalculando el estado
    const {username, password} = credentials;
    const disabled = !(username && password);


    return (
        <div>
            <h1>Los in to Twiiter</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                    value={username}
                />
                <br/>
                <input 
                    type="password" 
                    name="password"
                    onChange={handleChange}
                    value={password}
                /><br/>
                <Button type="sumbit" $variant="primary" disabled={disabled}>
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default LoginPage