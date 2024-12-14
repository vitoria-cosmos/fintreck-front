// import './signin.css';
import { useState } from 'react';
import Header from '../../components/Header/header.js';
export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div className='container_signin'>
                        <form className='form'>
                            <h1>Sign-up</h1>
                            <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                            <button type='submit'>Sign-in</button>
                        </form>

                    </div>
                </section>
            </main>

        </>
        
    )
}