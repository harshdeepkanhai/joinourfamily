import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="desktop marketing-landing-nav">
        <a href="/">
          <h1>Join Our Family</h1>
        </a>
        <div className="nav__links-container">
          <ul className="nav__ul--links">
            <li><a className="nav__a--link" href="https://www.rileygrey.com/">Home</a></li>
            <li><a className="nav__a--link" href="https://www.rileygrey.com/about">Our Story</a></li>
            <li className="tr-designs"><a className="nav__a--link" href="https://www.rileygrey.com/v2/designs">Designs</a></li>
            <li><a className="nav__a--link" href="https://www.rileygrey.com/wedding-guide">Wedding Guide</a></li>
          </ul>
          <ul className="nav__ul--links">
            <li className="tr-faq"><a className="nav__a--link" href="https://www.rileygrey.com/faq">FAQ</a></li>
            <li id="home-dropdown-container"><span className="nav__a--link">Features</span>
              <ul id="home-dropdown">
                <li><a href="https://www.rileygrey.com/wedding-website-templates">Templates</a></li>
                <li><a href="https://www.rileygrey.com/luxury-wedding-invitations">Invitations</a></li>
                <li><a href="https://www.rileygrey.com/wedding-invitations-uk">Countries</a></li>
                <li><a href="https://www.rileygrey.com/wedding-website-examples">Examples</a></li>
                <li><a href="https://www.rileygrey.com/wedding-rsvp-website">RSVP</a></li>
              </ul>
            </li>
            <li className="tr-getstarted"><a className="nav__a--link" href="https://www.rileygrey.com/v2/designs">Get Started</a></li>
            <li><a className="nav__a--link" href="https://www.rileygrey.com/users/sign_in">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
