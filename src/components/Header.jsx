import { Link } from "react-router-dom";


function Header(){
    return (
        <div className="flex justify-around border-b-2 border-slate-400 bg-amber-50 shadow-md">
            <img src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg" alt="" 
            height="50px"
            width="200px"
            className="rounded-full p-2"
            />
            <ul className="flex justify-center items-center gap-7">
               <Link to="/"><li>Home</li></Link> 
               <Link to="/browsebook"><li>BrowseBook</li></Link> 
               <Link to="/addbook"><li>AddBooks</li></Link> 
            </ul>
        </div>
    )
}

export default Header;