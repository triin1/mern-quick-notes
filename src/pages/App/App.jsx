import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
    const [user, setUser] = useState(getUser());

    return (
        <main>
            {user ?
                <>
                    <NavBar user={ user } setUser={ setUser }/>
             
                    <Routes>
                        <Route path="/" element={ <NotesPage /> }/>
                    </Routes>
                </>
                :
                <AuthPage setUser={ setUser } />
            }
        </main>
    );
};

export default App;
