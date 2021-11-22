import Image from "next/image";
import styles from "./header.module.css";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/Michich.png"
          width={200}
          height={70}
          alt="My logo"
          className={styles.img}
        />
        <div className={styles.divider} />
      </div>

      <div className={styles.logoPages}>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
      <div className={styles.contactMedia}>
        <Image
          src="/instagram (1).png"
          width={30}
          height={30}
          alt="instagram"
          className={styles.mediaVectors}
        />
        <Image
          src="/facebook (1).png"
          width={25}
          height={25}
          alt="facebook"
          className={styles.mediaVectors}
        />
        <Image
          src="/linkedin-logo.png"
          width={22}
          height={22}
          alt="linkedIn"
          className={styles.mediaVectors}
        />
      </div>
      <div className={styles.divider} />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <div className={styles.contactMeButton}>Contact Me</div>
    </div>
  );
}
