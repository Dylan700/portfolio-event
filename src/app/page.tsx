import Image from "next/image";
import styles from "./page.module.css";
import PortfolioEntryCard from "@/components/PortfolioEntryCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <PortfolioEntryCard title="test" description="testing description here again because i have some text to show you" image="./vercel.svg" />
    </main>
  );
}
