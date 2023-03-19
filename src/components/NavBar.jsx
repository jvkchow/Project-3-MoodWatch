const styles = {
  navBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
  },
  button: {
    textAlign: 'center',
    padding: '0 10px 0',
  },
  primaryImg: {
    height: '75px',
  },
  secondaryImg: {
    height: '50px',
  },
};

export const NavBar = ({ isHome }) => {
  return isHome ? (
    <div style={styles.navBar}>
      <div style={styles.button}>
        <img src='calendar.svg' alt='calendar' style={styles.secondaryImg} />
      </div>
      <div style={styles.button}>
        <img src='submit.svg' alt='add_submission' style={styles.primaryImg} />
      </div>
      <div style={styles.button}>
        <img src='settings.svg' alt='submit' style={styles.secondaryImg} />
      </div>
    </div>
  ) : (
    <div></div>
  );
};
