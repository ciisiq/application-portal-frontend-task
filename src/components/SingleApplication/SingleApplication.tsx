import React from 'react';
import styles from './SingleApplication.module.css';
import moment from 'moment'; //Library For to format the data

const SingleApplication = ({ application }) => {
  //Function to format the currency
  const formattedCurrency = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(application.loan_amount);

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        <p className={styles.bold}>{application.company}</p>
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        <p className={styles.bold}>
          {application.first_name} {application.last_name}
        </p>
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <p className={styles.email}>{application.email}</p>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <p className={styles.bold}>{formattedCurrency}</p>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <p className={styles.bold}>
          {moment(application.date_created).format('L')}
        </p>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <p className={styles.bold}>
          {moment(application.expiry_date).format('L')}
        </p>
      </div>
    </div>
  );
};

export default SingleApplication;
