const Footer = () => {
  return (
    <footer className="border-t border-valorant-line bg-valorant-ink">
      <div className="w-full mx-auto text-center max-w-screen-xl p-4">
        <span className="text-sm text-valorant-grey sm:text-center">
          ©2023{" "}
          <a href="https://github.com/ffirgin" className="text-valorant-red hover:underline">
            ffirgin
          </a>
          {" "}- All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
