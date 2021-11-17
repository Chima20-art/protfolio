import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <Image
        src="/Michich.png"
        width={200}
        height={100}
        alt="My logo"
        className={styles.img}
      ></Image>
    </div>
  );
}
