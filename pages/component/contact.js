import Head from "next/head";
import styles from '@/pages/component/Contact.module.css'




export default function Contact() {
    return (
        <>
            <main className={styles.main}>

                <div className={styles.container}>
                    <form className={styles.contactForm}>
                        <h2>Contact Us</h2>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="first-name">First Name *</label>
                                <input className={styles.inputField} placeholder="Enter first name" type="text" id="first-name" name="first-name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="last-name">Last Name *</label>
                                <input className={styles.inputField} placeholder="Enter last name" type="text" id="last-name" name="last-name" required />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" >Email Address *</label>
                            <input className={styles.inputField} placeholder="Enter email" type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Query Type *</label>
                            <div className={styles.radioGroup}>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="general-enquiry" required /> General Enquiry
                                </label>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="support-request" required /> Support Request
                                </label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message *</label>
                            <textarea className={styles.textArea} id="message" name="message" required></textarea>
                        </div>
                        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                            <label>
                                <input type="checkbox" name="consent" required /> I consent to being contacted by the team *
                            </label>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>






            </main>

        </>
    );
}
