'use client'

import styles from "@/app/styles/header.module.css";
import { name } from "@/config";
import Burger from "./cmp/burger/page";

export default function Page() {

	return (
		<header className={styles.header}>
			<p>{name}</p>
			<Burger />
		</header>
	);
}
