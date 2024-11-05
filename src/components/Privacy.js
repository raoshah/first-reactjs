import React from 'react';

const Privacy = () => {
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
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.paragraph}>Last updated: October 14, 2024</p>
      <p style={styles.paragraph}>
        This Privacy Policy describes how RaoSha Fashion (the "Site", "we", "us", or "our") collects, uses, and discloses your personal
        information when you visit, use our services, or make a purchase from www.raosha.in (the "Site") or otherwise communicate
        with us regarding the Site (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the
        user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected
        pursuant to this Privacy Policy.
      </p>
      <p style={styles.paragraph}>
        Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and
        disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use
        or access any of the Services.
      </p>

      <h2 style={styles.subHeader}>Changes to This Privacy Policy</h2>
      <p style={styles.paragraph}>
        We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal,
        or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date, and take any other steps
        required by applicable law.
      </p>

      <h2 style={styles.subHeader}>How We Collect and Use Your Personal Information</h2>
      <p style={styles.paragraph}>
        To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information that
        we collect and use varies depending on how you interact with us.
      </p>

      <h2 style={styles.subHeader}>What Personal Information We Collect</h2>
      <p style={styles.paragraph}>
        The types of personal information we obtain about you depend on how you interact with our Site and use our Services. When we use
        the term "personal information", we are referring to information that identifies, relates to, describes, or can be associated with
        you. The following sections describe the categories and specific types of personal information we collect.
      </p>

      <h3 style={styles.subHeader}>Information We Collect Directly from You</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>Contact details including your name, address, phone number, and email.</li>
        <li style={styles.li}>Order information including your name, billing address, shipping address, payment confirmation, email address, and phone number.</li>
        <li style={styles.li}>Account information including your username, password, security questions, and other information used for account security purposes.</li>
        <li style={styles.li}>Customer support information, including the information you choose to include in communications with us.</li>
      </ul>

      <h3 style={styles.subHeader}>Information We Collect about Your Usage</h3>
      <p style={styles.paragraph}>
        We may also automatically collect certain information about your interaction with the Services ("Usage Data"). Usage Data may include device information, browser information, network connection details, your IP address, and other interaction data.
      </p>

      <h3 style={styles.subHeader}>Information We Obtain from Third Parties</h3>
      <p style={styles.paragraph}>
        We may obtain information about you from third parties, including from vendors and service providers who may collect
        information on our behalf, such as:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Companies who support our Site and Services, such as Shopify.</li>
        <li style={styles.li}>Payment processors, who collect payment information (e.g., credit card details) to process your order.</li>
      </ul>

      <h2 style={styles.subHeader}>How We Use Your Personal Information</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Providing Products and Services</li>
        <li style={styles.li}>Marketing and Advertising</li>
        <li style={styles.li}>Security and Fraud Prevention</li>
        <li style={styles.li}>Communicating with You and Service Improvement</li>
      </ul>

      <h2 style={styles.subHeader}>Cookies</h2>
      <p style={styles.paragraph}>
        Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our
        store with Shopify, see <a href="https://www.shopify.com/legal/cookies" style={styles.link}>Shopify's Cookies Policy</a>.
      </p>

      <h2 style={styles.subHeader}>Children's Data</h2>
      <p>
      The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.

As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we “share” or “sell” (as those terms are defined in applicable law) personal information of individuals under 16 years of age.
      </p>
      <p style={styles.paragraph}>
        The Services are not intended to be used by children, and we do not knowingly collect any personal information about children.
      </p>

      <h2 style={styles.subHeader}>Security and Retention of Your Information</h2>
      <p style={styles.paragraph}>
        We retain your personal information for as long as needed for various purposes, such as maintaining your account and complying with legal obligations.
      </p>

      <h2 style={styles.subHeader}>Your Rights</h2>
      <p style={styles.paragraph}>
        Depending on where you live, you may have rights related to accessing, deleting, correcting, or restricting the processing of your
        personal information. You may also withdraw consent or manage your communication preferences. Contact us to exercise these rights.
      </p>

      <h2 style={styles.subHeader}>Complaints</h2>
      <p style={styles.paragraph}>
        If you have complaints about how we process your personal information, you may contact us. If you are not satisfied with our
        response, you may lodge a complaint with your local data protection authority.
      </p>

      <h2 style={styles.subHeader}>International Users</h2>
      <p style={styles.paragraph}>
        Please note that we may transfer, store, and process your personal information outside the country you live in. We will rely on
        recognized transfer mechanisms where required.
      </p>

      <h2 style={styles.subHeader}>Contact</h2>
      <p style={styles.paragraph}>
        Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights
        available to you, please call or email us at <a href="mailto:raosharetails@gmail.com" style={styles.link}>raosharetails@gmail.com</a> or contact us at:
      </p>
      <p style={styles.paragraph}>Hafij Colony, Mohta Saray, Bikaner, RJ, 302029, IN</p>
    </div>
  );
};

export default Privacy;


