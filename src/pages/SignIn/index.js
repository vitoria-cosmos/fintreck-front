import './signin.css';
import { useState } from 'react';
import Header from '../../components/Header/header.js';
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div className='container_signin'>
                        <form className='form'>
                            <h1>Sign-in</h1>
                            <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                            <button type='submit'>Sign-in</button>
                        </form>

                    </div>
                </section>
            </main>

        </>
        
    )
}