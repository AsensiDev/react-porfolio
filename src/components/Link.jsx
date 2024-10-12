import { useState } from "react";

export default function Link({ icon, text, path }) {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        color: 'white',
        backgroundColor: isHovered ? 'rgba(255, 167, 0, 0.34)' : 'transparent',
        border: '1px solid white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '.3s ease',
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px 30px'
    };

    const iconStyles = {
        marginRight: '8px', 
    };

    return (
        <a 
            href={path}
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={iconStyles}>{icon}</span>
            <span>{text}</span>
        </a>
    );
}
