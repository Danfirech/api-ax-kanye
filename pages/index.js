import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import API from "./components/kanye";

export default function Home() {
  return (
    <div>
      <API />
    </div>
  );
}
