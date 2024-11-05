import React from 'react';

const Terms = () => {
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
    ul: {
      marginBottom: '15px',
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    li: {
      marginBottom: '10px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    strong: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Terms of Service</h1>
      <p style={styles.paragraph}>Last updated: October 14, 2024</p>
      <p style={styles.paragraph}>
        These Terms of Service ("Terms") apply to your access and use of the website, www.raosha.in ("Site") operated by RaoSha Fashion (the "Company", "we", "us", or "our"). By using our Site, you agree to be bound by these Terms. Please read these Terms carefully, and if you do not agree, you should not use the Site.
      </p>

      <h2 style={styles.subHeader}>Use of Our Site</h2>
      <p style={styles.paragraph}>
        You may use our Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>In any way that violates any applicable local, national, or international law or regulation.</li>
        <li style={styles.li}>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material (spam).</li>
        <li style={styles.li}>To impersonate or attempt to impersonate RaoSha Fashion, a Company employee, or any other person.</li>
      </ul>

      <h2 style={styles.subHeader}>Intellectual Property Rights</h2>
      <p style={styles.paragraph}>
        The Site and its entire contents, features, and functionality (including all information, software, text, displays, images, and the design) are owned by RaoSha Fashion, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property or proprietary rights laws.
      </p>

      <h2 style={styles.subHeader}>Product Descriptions</h2>
      <p style={styles.paragraph}>
        We attempt to be as accurate as possible in describing our products. However, we do not warrant that product descriptions or any other content on the Site are accurate, complete, reliable, current, or error-free.
      </p>

      <h2 style={styles.subHeader}>Orders and Payment</h2>
      <p style={styles.paragraph}>
        By placing an order, you agree that you are offering to purchase a product, subject to these Terms. All orders are subject to acceptance and availability. Prices are subject to change at any time.
      </p>

      <h2 style={styles.subHeader}>Limitation of Liability</h2>
      <p style={styles.paragraph}>
        To the fullest extent permitted by law, in no event will RaoSha Fashion, its affiliates, or their licensors, service providers, employees, agents, or officers be liable for any indirect, incidental, consequential, or punitive damages, including, without limitation, loss of revenue, loss of data, or other damages arising from your use of or inability to use the Site.
      </p>

      <h2 style={styles.subHeader}>Governing Law</h2>
      <p style={styles.paragraph}>
        These Terms are governed by and construed in accordance with the laws of India without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in Bikaner, Rajasthan for the resolution of any disputes.
      </p>

      <h2 style={styles.subHeader}>Changes to These Terms</h2>
      <p style={styles.paragraph}>
        We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the Site following the posting of revised Terms means you accept and agree to the changes.
      </p>

      <h2 style={styles.subHeader}>Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about these Terms, please contact us at <a href="mailto:raosharetails@gmail.com" style={styles.link}>raosharetails@gmail.com</a> or at:
      </p>
      <p style={styles.paragraph}>Hafij Colony, Mohta Saray, Bikaner, RJ, 302029, IN</p>
    </div>
  );
};

export default Terms;

