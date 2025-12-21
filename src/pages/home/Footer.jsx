import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300  py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tastyc</h2>
          <p>
            Best restaurant experience with fresh ingredients, delicious dishes,
            and exceptional service. We create memorable moments for our guests.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-primary transition" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-primary transition" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-primary transition" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-primary transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Menu
            </li>
            <li className="hover:text-primary cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>123 Food Street, City, Country</li>
            <li>+123 456 7890</li>
            <li>info@tastyc.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe for latest updates and offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-sm w-full"
            />
            <button className="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tastyc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
