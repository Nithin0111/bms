import '../../css/custom.css';

function Header({ landing }) {
  //alert(JSON.stringify(props));
  return (
    <nav className={`${!landing && 'navbar'}`}>
      <div className="nav">
        <div>
          <div className="header-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15zm0 0h2v2h-2v-2z" />
            </svg>
            <h1>Book store</h1>
          </div>
          <p style={{ color: 'grey' }}>"Everyone is a reader"</p>
        </div>

        <ul className="navLinks">
          <li className="navLink">Home</li>
          <li className="navLink" style={{ color: '#5ff0ae' }}>
            |
          </li>

          <li className="navLink">Login</li>
        </ul>
      </div>
    </nav>
  );
}
// Header.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   title: 'React Unknown Project',
//   description: 'Description will go here',
// };
export default Header;
