import React from 'react';

const Refund = () => {
  const styles = {
    container: {
      margin: '20px auto',
      maxWidth: '800px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '2em',
      color: '#444',
      marginBottom: '20px',
      textAlign: 'center',
    },
    subHeader: {
      fontSize: '1.5em',
      marginTop: '30px',
      marginBottom: '10px',
      color: '#555',
    },
    paragraph: {
      marginBottom: '15px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Refund Policy</h1>
      <p style={styles.paragraph}>
        We have a 7-day return policy, which means you have 7 days after receiving your item to request a return.
      </p>
      <p style={styles.paragraph}>
        To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its
        original packaging. You’ll also need the receipt or proof of purchase.
      </p>
      <p style={styles.paragraph}>
        To start a return, you can contact us at <a href="mailto:raosharetails@gmail.com" style={styles.link}>raosharetails@gmail.com</a>.
        If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package.
        Items sent back to us without first requesting a return will not be accepted.
      </p>
      <p style={styles.paragraph}>
        You can always contact us for any return questions at <a href="mailto:raosharetails@gmail.com" style={styles.link}>raosharetails@gmail.com</a>.
      </p>

      <h2 style={styles.subHeader}>Damages and Issues</h2>
      <p style={styles.paragraph}>
        Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong
        item, so that we can evaluate the issue and make it right.
      </p>

      <h2 style={styles.subHeader}>Exchanges</h2>
      <p style={styles.paragraph}>
        The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate
        purchase for the new item.
      </p>

      <h2 style={styles.subHeader}>European Union 14-day Cooling Off Period</h2>
      <p style={styles.paragraph}>
        Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your
        order within 14 days, for any reason and without justification. As above, your item must be in the same condition that you received it,
        unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
      </p>

      <h2 style={styles.subHeader}>Refunds</h2>
      <p style={styles.paragraph}>
        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved,
        you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for
        your bank or credit card company to process and post the refund too.
      </p>
      <p style={styles.paragraph}>
        If more than 15 business days have passed since we’ve approved your return, please contact us at <a href="mailto:raosharetails@gmail.com" style={styles.link}>raosharetails@gmail.com</a>.
      </p>
    </div>
  );
};

export default Refund;
