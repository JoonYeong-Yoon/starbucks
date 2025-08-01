function Header() {
  return (
    <>
      <header>
        <div>
          <img src="/images/logo.png"></img>
        </div>

        <div>
          {/* sub header*/}
          <div className="sub-header">
            <ul className="header-ul">
              <li>
                <a href="/signin">Sign in</a>
              </li>
              <li>
                <a href="/my">My Starbucks</a>
              </li>
              <li>
                <a href="/custom">Customer Service & Ideas</a>
              </li>
              <li>
                <a href="/find">Find a Store</a>
              </li>
            </ul>
          </div>
          {/* main header*/}
          <div className="main-header">
            <ul className="header-ul">
              <li>
                <a href="/coffee">coffee</a>
              </li>
              <li>
                <a href="/menu">menu</a>
              </li>
              <li>
                <a href="/store">store</a>
              </li>
              <li>
                <a href="/esg">esg</a>
              </li>
              <li>
                <a href="/rewards">starbucks rewards</a>
              </li>
              <li>
                <a href="/corporate">corporate sales</a>
              </li>
              <li>
                <a href="/new">what's new</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
