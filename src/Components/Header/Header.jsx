import "./Header.css";
function Header() {
  return (
    <div className="mainHeader">
      <div className="container">
        <div className="headerFlex">
          <div className="logo">
            <img src="src/assets/logo.png" alt="Logo" width="48px" />
          </div>
          <div className="searchBar">
            <div className="form-group">
              <img
                src="src/assets/searchIcon.svg"
                alt="searchIcon"
                width="22px"
              />
              <input
                type="text"
                name="searchbar"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="headerRight">
            <div className="headerRightBox">
              <div className="iconBox">
                <img
                  src="src/assets/cartIcon.svg"
                  alt="cartIcon"
                  width="22px"
                />
                <span className="badge badge-light">4</span>
              </div>
              <span className="iconTxt">Cart</span>
            </div>
            <div className="headerRightBox">
              <div className="iconBox">
                <img
                  src="src/assets/wishlistIcon.svg"
                  alt="wishlistIcon"
                  width="22px"
                />
              </div>
              <span className="iconTxt">Favorites</span>
            </div>
            <div className="headerRightBox">
              <div className="iconBox">
                <img
                  src="src/assets/userIcon.svg"
                  alt="userIcon"
                  width="32px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
