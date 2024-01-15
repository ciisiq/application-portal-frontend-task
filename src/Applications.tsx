import React, { useEffect, useState } from 'react';
import SingleApplication from './SingleApplication';
import { getSingleApplicationFixture } from './__fixtures__/applications.fixture';
import styles from './Applications.module.css';
import { getApplications } from './api/applicationsServices';
import { Button } from './ui/Button/Button';

const Applications = () => {
  // const applications = getSingleApplicationFixture;
  const [applications, setApplications] = useState([]); //For to hold the data and pass in the singleApliccation list
  const [page, setPage] = useState(1); // For to start the page in number 1

  const loadMoreApplications = async () => {
    try {
      const newApplications = await getApplications(page, 5);
      setApplications([...applications, ...newApplications]); //Will get the actual applications and the 5 more new ones
      setPage(page + 1); // Increase the page number
    } catch (error) {
      console.error('Error fetch applications', error);
    }
  };

  // To load each time something is changed
  useEffect(() => {
    loadMoreApplications();
  }, []);

  return (
    <div className={styles.Applications}>
      {applications.map((application) => (
        <SingleApplication key={application.id} application={application} />
      ))}

      <Button
        className={'button-class'}
        text="Load more"
        onClick={loadMoreApplications}
      />
    </div>
  );
};

export default Applications;
