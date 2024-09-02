const Footer = (): JSX.Element => {
  const year = new Date();

  return (
    <footer className='mycard__header footer'>
      <p>{`Jehiel Martinez  ${year.getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;
