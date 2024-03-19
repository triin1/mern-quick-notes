import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }
    
    return (
        <nav> 
            <div>
                Welcome, {user.name}
                &nbsp; &nbsp;
                <Link to="" onClick={ handleLogOut }>Log Out</Link>
            </div>
        </nav>
    )
};

export default NavBar;