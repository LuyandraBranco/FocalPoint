import { Navbar } from "@/components/Navbar";
import styles from "../styles/page.module.scss";


export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <Navbar />
      <main className={styles["tasklist-container"]}>
       
      </main>
    </div>
  );
}
