import { useState, useEffect } from "react";
import Head from "next/head";
import styles from '@/pages/component/Contact.module.css';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsSubmitted(true);

        // Hide success message after 8 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 8000);
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            {isSubmitted && (
                <div className={styles.successMessage}>
                    Message Sent! <br></br>
                    tanks for completing the form
                </div>
            )}
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="first-name">First Name <span className={styles.requered}>*</span></label>
                                <input className={styles.inputField} placeholder="Enter first name" type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="last-name">Last Name <span className={styles.requered}>*</span></label>
                                <input className={styles.inputField} placeholder="Enter last name" type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address <span className={styles.requered}>*</span></label>
                            <input className={styles.inputField} placeholder="Enter email" type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.query}>Query Type <span className={styles.requered}>*</span></label>
                            <div className={styles.radioGroup}>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="general-enquiry" required /> <span className={styles.queryText}> General Enquiry</span>
                                </label>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="support-request" required /> <span className={styles.queryText}> Support Request</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message <span className={styles.requered}>*</span></label>
                            <textarea className={styles.textArea} id="message" name="message" required></textarea>
                        </div>
                        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                            <label>
                                <input className={styles.checkboxText} type="checkbox" name="consent" required /> <span className={styles.boxText}> consent to being contacted by the team</span> <span className={styles.requered}>*</span>
                            </label>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </main>
        </>
    );
}
