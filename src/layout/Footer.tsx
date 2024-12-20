const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%'}}>
        <p>&copy; {new Date().getFullYear()} My Company</p>
      </footer>
    );
  };

export default Footer;