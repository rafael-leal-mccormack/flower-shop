import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  company: string;
  message: string;
  sendEmail: string;
  phoneNumber: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  company,
  message,
  sendEmail,
  phoneNumber
}) => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
    },
    header: {
      fontSize: '24px',
      color: '#333',
      borderBottom: '2px solid #ddd',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#444',
      marginBottom: '15px',
    },
    list: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '5px',
    },
    blockquote: {
      fontStyle: 'italic',
      borderLeft: '4px solid #ddd',
      paddingLeft: '15px',
      marginLeft: '0',
      color: '#666',
    },
    signature: {
      marginTop: '30px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>New Contact Form Submission</h2>
      <p style={styles.paragraph}>A new customer has submitted the contact form on our website. Here are the details:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}><strong>Name:</strong> {firstName} {lastName}</li>
        <li style={styles.listItem}><strong>Email:</strong> {sendEmail}</li>
        {company && <li style={styles.listItem}><strong>Company:</strong> {company}</li>}
        {phoneNumber && <li style={styles.listItem}><strong>Phone Number:</strong> {phoneNumber}</li>}
      </ul>
      <p style={styles.paragraph}><strong>Customer&apos;s Message:</strong></p>
      <blockquote style={styles.blockquote}>{message}</blockquote>
      <p style={styles.paragraph}>Please follow up with this customer as soon as possible.</p>
    </div>
  );
};
