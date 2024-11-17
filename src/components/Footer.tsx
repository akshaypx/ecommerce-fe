const Footer = () => {
  return (
    <footer className="bg-gray-200 min-h-[20vh] ">
      <div className="max-w-[900px] m-auto p-6 flex flex-col justify-between gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex-1">
            <p>Home</p>
            <p>Shop All</p>
            <p>New Releases</p>
          </div>
          <div className="flex-1">
            <p>Links</p>
            <p>Returns</p>
            <p>Exchange Policy</p>
          </div>
          <div className="flex-1">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="flex-1">
            <p>Instagram</p>
            <p>Whatsapp</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="w-full text-center">
          <p>&copy; 2024 MoonCreations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
