import 'bulma/css/bulma.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const socialIcons = [
  {id: 1, name:'Facebook', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/facebook-icon.png', link: 'https://www.facebook.com/'},
  {id: 2, name: 'Instagram', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/pinterest-icon.png', link: 'https://www.instagram.com/'},
  {id: 3, name: 'Twitter', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/twitter-icon.png', link: 'https://twitter.comwww.twitter.com/'},
  {id: 4, name: 'Google+', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/google-plus-icon.png', link: 'https://www.google.com/'},
  {id: 5, name: 'Youtube', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/youtube-icon.png', link: 'https://www.youtube.com/'},
  {id: 6, name: 'Vimeo', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/vimeo-icon.png', link: 'https://www.vimeo.com/'},
  {id: 7, name: 'Linkedin', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/linkedin-icon.png', link: 'https://www.linkedlinkedin.com/'},
  {id: 8, name: 'Pinterest', icon: 'https://dessign.net/shopper-woocommerce-theme/wp-content/themes/ShopperWooThemePremium3/images/pinterest-icon.png', link: 'https://pinterest.com/'},
];


const sociallink = {
  'width': '25px',
  'height': '25px',
  'margin': '0 6px'
}

const Footer = () => {
  return ( 
    <>
      <footer className="footer mt-6 pb-3">
        <div id='direction' className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
          <div className="card footer-box">
            <div className="card-content">
              <div className="content has-text-left">
                <h4 className='has-text-weight-bold is-size-5'> Shopper WooCommerce Theme </h4>
                <p className='has-text-weight-light is-size-6'>
                  Shopper Free WooCommerce eCommerce WordPress Theme perfect
                  for simple online store, with clean and modern grid layout.
                </p>
              </div>
            </div>
          </div>
          <div className="card footer-box">
            <div className="card-content">
              <div className="content has-text-left">
                <h4 className='has-text-weight-bold is-size-5'> WooCommerce Plugin </h4>
                <p className='has-text-weight-light is-size-6'>
                  Easily manage your simple, digital and variable products 
                  in Woo Commerce with our intuitive UI, and easy store layout. 
                  Create your e-commerce store today.
                </p>
              </div>
            </div>
          </div>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-size-6" type="email" placeholder="Enter Your Email ID" />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} style={{'color': 'grey'}} size='lg' />
            </span>
          </div>
        </div>
        <div className="mt-6 is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-center is-align-items-center">
          {socialIcons.map(icon => (
            <a href={icon.link} key={icon.id} style={sociallink}>
              <img src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
        <p className='has-text-weight-light is-size-6 py-4 my-3'>
          &#169; 2022 All Rights Reserved
        </p>
      </footer>
    </>
  );
}
 
export default Footer;