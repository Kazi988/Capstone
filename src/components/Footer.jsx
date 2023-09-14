import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      &copy; {new Date().getFullYear()} Urban Essentials. All rights reserved.
    </footer>
  );
}

export default Footer;
