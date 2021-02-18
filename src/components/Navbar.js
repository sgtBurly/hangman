import React from "react"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}> 
            <h2>Hangman</h2>
            <div className= {styles.links}>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </nav>
     );
}
 
export default Navbar;