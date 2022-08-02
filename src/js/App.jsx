
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../component/login/Login';
//import { Profile } from '../component/login/Profile';
//import { LogoutButton } from '../component/login/Logout';
import  Enrutador  from '../component/Enrutador'

import '../css/App.css';

export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header"> 
        { isAuthenticated ? (
          <>  
            {/* <Profile/> 
            <LogoutButton /> 
             */}
            <Enrutador/>
          </>
        ):(
        <LoginButton />
        )}
      </header>
    </div>
  );
}

