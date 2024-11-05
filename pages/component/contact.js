import { useState } from "react";
import Head from "next/head";
import styles from '@/pages/component/Contact.module.css';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [queryTypeError, setQueryTypeError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [consentError, setConsentError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate each field
        const isFirstNameValid = event.target["first-name"].value.trim() !== "";
        const isLastNameValid = event.target["last-name"].value.trim() !== "";
        const isEmailValid = event.target.email.value.trim() !== "";
        const isQueryTypeValid = event.target["query-type"].value !== "";
        const isMessageValid = event.target.message.value.trim() !== "";
        const isConsentChecked = event.target.consent.checked;

        // Set error states based on validation
        setFirstNameError(!isFirstNameValid);
        setLastNameError(!isLastNameValid);
        setEmailError(!isEmailValid);
        setQueryTypeError(!isQueryTypeValid);
        setMessageError(!isMessageValid);
        setConsentError(!isConsentChecked);

        // If all fields are valid, show the success message
        if (isFirstNameValid && isLastNameValid && isEmailValid && isQueryTypeValid && isMessageValid && isConsentChecked) {
            setIsSubmitted(true);

            // Hide success message after 8 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 8000);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            {isSubmitted && (
                <div className={styles.successMessage}>
                    Message Sent! <br />
                    Thank you for completing the form.
                </div>
            )}
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="first-name">First Name <span className={styles.required}>*</span></label>
                                <input
                                    className={`${styles.inputField} ${firstNameError ? styles.errorBorder : ""}`}
                                    placeholder="Enter first name"
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                />
                                {firstNameError && <span className={styles.errorMessage}>This field is required.</span>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="last-name">Last Name <span className={styles.required}>*</span></label>
                                <input
                                    className={`${styles.inputField} ${lastNameError ? styles.errorBorder : ""}`}
                                    placeholder="Enter last name"
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                />
                                {lastNameError && <span className={styles.errorMessage}>This field is required.</span>}
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address <span className={styles.required}>*</span></label>
                            <input
                                className={`${styles.inputField} ${emailError ? styles.errorBorder : ""}`}
                                placeholder="Enter email"
                                type="email"
                                id="email"
                                name="email"
                            />
                            {emailError && <span className={styles.errorMessage}>This field is required.</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.query}>Query Type <span className={styles.required}>*</span></label>
                            <div className={styles.radioGroup}>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="general-enquiry" /> <span className={styles.queryText}> General Enquiry</span>
                                </label>
                                <label>
                                    <input className={styles.checkbox} type="radio" name="query-type" value="support-request" /> <span className={styles.queryText}> Support Request</span>
                                </label>
                            </div>
                            {queryTypeError && <span className={styles.errorMessage}>Please select a query type.</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                            <textarea
                                className={`${styles.textArea} ${messageError ? styles.errorBorder : ""}`}
                                id="message"
                                name="message"
                            ></textarea>
                            {messageError && <span className={styles.errorMessage}>This field is required.</span>}
                        </div>
                        <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                            <label>
                                <input
                                    className={`${styles.checkboxText} ${consentError ? styles.errorBorder : ""}`}
                                    type="checkbox"
                                    name="consent"
                                /> <span className={styles.boxText}>I consent to being contacted by the team</span> <span className={styles.required}>*</span>
                            </label>
                            {consentError && <span className={styles.errorMessage}>You must consent to being contacted.</span>}
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </main>
        </>
    );
}
