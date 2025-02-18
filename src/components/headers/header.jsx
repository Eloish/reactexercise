import {Routes,NavLink} from 'react-router-dom';
import RoutersApp from '../../Routes/RoutesApp';
import styles from './headers.module.css';


const Headers = () => {
    return (
        <>  
              <header className={styles.header}>
           
            <nav className={styles.nav}>
                
                    <NavLink className={styles.NavLink} to="/" >Home</NavLink>|
                    <NavLink  className={styles.NavLink}to="/posts">posts</NavLink>
            
            </nav>

        </header>
        
            <RoutersApp />
        </>
    );
    }
export default Headers;