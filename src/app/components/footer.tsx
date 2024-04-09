const Footer = () => {
  return (
    <footer className="bg-black rounded-t-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023{" "}
          <a href="https://github.com/ffirgin" className="hover:underline">
            ffirgin
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Placeholder
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Placeholder
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Placeholder
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Placeholder
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
