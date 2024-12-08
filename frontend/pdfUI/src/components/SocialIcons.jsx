import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { SiUpwork } from 'react-icons/si'; 
import { AiFillSkype } from 'react-icons/ai'; 
import { IoLogoWhatsapp } from 'react-icons/io'; 

const SocialIcons = () => {
  return (
    <div className="fixed top-52 right-4 flex flex-col space-y-3 z-50">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61558068443560"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl"
      >
        <FaFacebook />
      </a>

      {/* Upwork */}
      <a
        href="https://www.upwork.com/freelancers/~01fa51ddb2a327f336"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-2xl"
      >
        <SiUpwork />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/maaz_ai_enthusiast/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 text-2xl"
      >
        <FaInstagram />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Maaz-Ai-enthusiast"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 text-2xl"
      >
        <FaGithub />
      </a>

      {/* Skype */}
      <a
        href="https://join.skype.com/invite/sRXBxdrdMGOl"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-2xl"
      >
        <AiFillSkype />
      </a>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send/?phone=923236612937&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 text-2xl"
      >
        <IoLogoWhatsapp />
      </a>

      {/* Personal Website (Netlify) */}
      <a
        href="https://maazirfan.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-2xl"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
