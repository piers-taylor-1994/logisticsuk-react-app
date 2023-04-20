import './menu.scss';
const { Link } = require('react-router-dom');
const menuData = require('./data/menu.json');

function Menu() {
    let menuItems = menuData.data.map(item => {
        return (
            <Link to={item.url} key={item.title}>{item.title}</Link>
        )
    })

    return (
        <nav className="menu">
            {menuItems}
        </nav>
    )
}

export default Menu;