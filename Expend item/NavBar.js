import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
        <li>
        <Link to='/Home'>home</Link>
        </li>
        <li>        
            <Link to='/Menu'>menu</Link>
        </li>
        <li>  
                 <Link to='/About'>about</Link>
        </li>

    
        </>
    )
}
export default NavBar;