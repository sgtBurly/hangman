import style from '../styles/Footer.module.css';

const Footer = () => {
    return ( 
        <div className={style.Footer}>
            <div className={style.Wrapper}>
                <h3>Hangman</h3>
                <p>A React game developed by: <br></br> the Maroon Group</p>
            </div>

        </div>
     );
}
 
export default Footer;