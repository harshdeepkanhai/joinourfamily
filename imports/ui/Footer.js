import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footer--top clearfix">
          <img class="footer__img--logo" src="https://d3jzug80jq9bku.cloudfront.net/assets/rg_logo_footer-5e80cf1bde9c89e00054fb1b1e1ee3ce12609ce9c13cc63789772a67e55872ee.png" />
          <div class="footer__links-container">
          <ul class="footer__ul--links">
            <li><span class="footer__span--label">About Us</span></li>
            <li><a class="footer__a--link" href="https://www.rileygrey.com/about">Our Story</a></li>
            <li><a class="footer__a--link" href="https://www.rileygrey.com/v2/designs">Designs</a></li>
            <li><a class="footer__a--link" href="https://www.rileygrey.com/vendors/pricing">Pricing</a></li>
            <li><a target="_blank" class="footer__a--link" href="https://www.comeet.co/jobs/makifund/52.00E">Careers</a></li>
          </ul>
          <ul class="footer__ul--links">
            <li><span class="footer__span--label">Get Started</span></li>
            <li><a class="footer__a--link" href="https://www.rileygrey.com/faq">FAQ</a></li>
            <li><a class="footer__a--link" target="_blank" href="http://blog.rileygrey.com">Blog</a></li>
            <li><a class="footer__a--link" class="footer__a--link" href="mailto:help@rileygrey.com">Contact Us</a></li>
          </ul>
          <ul class="footer__ul--links">
            <li><span class="footer__span--label">Follow Us</span></li>
            <li><a class="footer__a--link" href="http://www.facebook.com/rileyandgrey" target="_blank">Facebook</a></li>
            <li><a class="footer__a--link" href="https://instagram.com/rileyandgrey" target="_blank">Instagram</a></li>
            <li><a class="footer__a--link" href="https://twitter.com/rileyandgrey" target="_blank">Twitter</a></li>
            <li><a class="footer__a--link" href="https://pinterest.com/rileyandgrey" target="_blank">Pinterest</a></li>
          </ul>
          <ul class="footer__ul--links">
            <li><a class="footer__a--link heavy" href="https://www.rileygrey.com/v2/designs">Get Started</a></li>
            <li><a class="footer__a--link heavy login" href="/users/sign_in">Login</a></li>
          </ul>
          <div class="footer__signup-container" id="footer-signup">
            <input class="footer__input--signup" placeholder="enter your email" type="text" />
              <a class="footer__a--signup">Sign Me Up</a>
            </div>
          </div>
        </div>
        <div class="footer--bottom">
          <ul class="footer__ul--inline-links">
            <div class="top">
              <li><a class="footer__a--inline-link" href="/tos">Terms of Service</a></li>
              <li><a class="footer__a--inline-link" href="/privacy">Privacy Policy</a></li>
              <li><a class="footer__a--inline-link" href="mailto:help@rileygrey.com">help@rileygrey.com</a></li>
            </div>
            <div class="bottom">
            <div class="footer__attribution"><span class="footer__span--author-label">Photo Credits:</span>
              <a class="footer__a--author" href="http://braedonphotography.com/" target="_blank">Braedon Flynn,</a>
              <a class="footer__a--author" href="http://ameliafullarton.com/" target="_blank">Amelia Fullarton,</a>
              <a class="footer__a--author" href="http://www.mksadler.com/" target="_blank">MK Sadler</a>
            </div>
          </div>
        </ul>
        <div class="footer__social-links">
          <a class="icons-sprite icons-facebook footer__a--socialicon" href="http://www.facebook.com/rileyandgrey" target="_blank"></a>
          <a class="icons-sprite icons-instagram footer__a--socialicon" href="https://instagram.com/rileyandgrey" target="_blank"></a>
          <a class="icons-sprite icons-twitter footer__a--socialicon" href="https://twitter.com/rileyandgrey" target="_blank"></a>
          <a class="icons-sprite icons-pinterest footer__a--socialicon" href="https://pinterest.com/rileyandgrey" target="_blank"></a>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
