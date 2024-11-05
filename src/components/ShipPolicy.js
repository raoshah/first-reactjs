import React from 'react';

const ShippingPolicy = () => {
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Shipping Policy</h1>
      <p style={styles.paragraph}>
        Welcome to RaoSha Fashion! We strive to ensure that your shopping experience with us is seamless and satisfactory. Below is our shipping policy, outlining how we handle the delivery of your orders.
      </p>

      <h2 style={styles.subHeader}>Processing Time</h2>
      <p style={styles.paragraph}>
        <strong>Order Processing:</strong> Once your order is placed, it will be processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.
      </p>
      <p style={styles.paragraph}>
        <strong>Customization & Pre-orders:</strong> For customized or pre-ordered items, processing times may vary. Specific details will be provided at the time of purchase.
      </p>

      <h2 style={styles.subHeader}>Shipping Methods & Delivery Times</h2>
      <p style={styles.paragraph}>
        <strong>Standard Shipping:</strong> Typically, deliveries are made within 5-7 business days after your order is processed.
      </p>
      <p style={styles.paragraph}>
        <strong>Express Shipping:</strong> For faster delivery, choose our express shipping option, which typically takes 2-4 business days.
      </p>
      <p style={styles.paragraph}>
        <strong>International Shipping:</strong> We offer worldwide shipping. Delivery times for international orders vary by location but generally range from 7-14 business days.
      </p>

      <h2 style={styles.subHeader}>Shipping Charges</h2>
      <p style={styles.paragraph}>
        <strong>Domestic Shipping:</strong> We offer free standard shipping on all orders within India. Express shipping charges will be calculated at checkout.
      </p>
      <p style={styles.paragraph}>
        <strong>International Shipping:</strong> Shipping charges for international orders will be calculated at checkout based on the destination and shipping method chosen.
      </p>

      <h2 style={styles.subHeader}>Order Tracking</h2>
      <p style={styles.paragraph}>
        Once your order has been shipped, you will receive a confirmation email with a tracking number. You can track your order using this number on our website or the carrier’s website.
      </p>
      <p style={styles.paragraph}>
        Please allow 24 hours for the tracking information to update after receiving your tracking number.
      </p>

      <h2 style={styles.subHeader}>Shipping Restrictions</h2>
      <p style={styles.paragraph}>
        We currently do not ship to P.O. Boxes or APO/FPO addresses. Some remote areas may require additional delivery time. We will notify you if your delivery might be delayed.
      </p>

      <h2 style={styles.subHeader}>Customs, Duties, and Taxes</h2>
      <p style={styles.paragraph}>
        For international orders, additional customs fees, duties, and taxes may be applicable based on your country’s regulations. These charges are the customer’s responsibility.
      </p>

      <h2 style={styles.subHeader}>Lost or Damaged Items</h2>
      <p style={styles.paragraph}>
        We take utmost care to ensure your order reaches you safely. However, if your package is lost or damaged in transit, please contact our customer service team immediately.
      </p>

      <h2 style={styles.subHeader}>Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions or concerns regarding our shipping policy, feel free to reach out to us at <a href="mailto:raosharetails@gmail.com">raosharetails@gmail.com</a> or call our customer service team at +91-9269562264.
      </p>
    </div>
  );
};

export default ShippingPolicy;
