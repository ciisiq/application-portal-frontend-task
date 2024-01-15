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
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formattedCurrency}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {moment(application.date_created).format('L')}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {moment(application.expiry_date).format('L')}
      </div>
    </div>
  );
};

export default SingleApplication;
