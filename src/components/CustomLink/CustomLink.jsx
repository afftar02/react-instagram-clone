import { Link } from 'react-router-dom';

function CustomLink({ children, to }) {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
            {children}
        </Link>
    )
};

export default CustomLink;