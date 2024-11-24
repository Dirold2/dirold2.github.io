'use client'

import { ContactButton } from "@/components/contact-button";
import styles from "@/app/styles/footer.module.css";

export default function Footer() {

	return (
		<footer className={styles.footer}>
            <ContactButton
              href="https://github.com/dirold2"
              icon="github"
              label="GitHub"
            />
            <ContactButton
              href="mailto:i@dirold2.ru"
              icon="envelope"
              label="i@dirold2.ru"
            />
		</footer>
	);
}
