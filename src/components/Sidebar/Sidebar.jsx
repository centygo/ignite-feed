import { Avatar } from "../Avatar/Avatar";
import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://pbs.twimg.com/profile_banners/1332320200079912961/1756134191/1500x500"
            />

            <div className={styles.profile}>
                <Avatar src="https://pbs.twimg.com/profile_images/1959994968648433664/9BxsuiHS_400x400.jpg" />

                <strong>Kaere Alarcon</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={16} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
