import React from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends React.Component {
    render() {
        return (
            <ul> <li><Link to='/'>Home</Link></li>
                <li><Link to='/hotliquid' className="active" >HotItem</Link></li>
                <li><Link to="/colditem">ColdItem</Link></li>
                <li><Link to="/bakeryitem">BakeryItem</Link></li>
                <li><Link to="/khajaitem">KhajaItem</Link></li>
                <li><Link to="/remainitem">RemainItem </Link></li>
            </ul>
        );
    }

}
export default Sidebar;