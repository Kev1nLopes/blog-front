import styles from './style.module.css';
import frog from '../../assets/saoi.png'
import { Link } from 'react-router-dom';
import { RiNotification2Line, RiUser2Line} from 'react-icons/ri'

export function Header(){
  return(
    <header className={styles.header}>  
      <div className={styles.headerContent}>

        <div className={styles.logo}>
          <img src={frog} alt="Sapo sentado" />
          <h3>WikiFrog</h3>
        </div>

        <nav className={styles.navbar}>
          <Link to="/recentes">Recentes</Link>
          <Link to="/curiosidades">Curiosidades</Link>
          <Link to="/extincao">Extinção</Link>
        </nav>

        <div className={styles.profile}>
          <RiNotification2Line />
          <RiUser2Line />
        </div>

      </div>
    </header>
  )
}