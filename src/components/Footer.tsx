import { FiHeart, FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-primary-600 text-xl font-display font-bold">Dhaal</span>
              <span className="text-gray-800 text-xl font-display font-bold">Delight</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Sharing the rich tradition of dhaal recipes from across South Asia.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiTwitter />} />
              <SocialIcon icon={<FiFacebook />} />
              <SocialIcon icon={<FiYoutube />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="All Recipes" />
              <FooterLink href="#" label="Popular Recipes" />
              <FooterLink href="#" label="Latest Recipes" />
              <FooterLink href="#" label="Cooking Techniques" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Learn</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="About Dhaal" />
              <FooterLink href="#" label="Spice Guide" />
              <FooterLink href="#" label="Cooking Tips" />
              <FooterLink href="#" label="Nutrition Facts" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Contact" />
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dhaal Delight. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <FiHeart className="text-primary-500 mx-1" /> for dhaal lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href}
      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
    >
      {label}
    </a>
  </li>
);

export default Footer;
