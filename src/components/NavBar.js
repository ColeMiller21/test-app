const NavBar = ({ connect, isConnected }) => {
  const onTempLink = () => {
    alert("Page Coming Soon");
  };

  return (
    <div className="flex justify-between py-3 px-4">
      <div className="ml-3 text-white text-xl">LOGO</div>
      <div className="justify-start">
        <ul className="inline-block">
          <li
            className="inline-block mr-5 text-white font-roboto text-lg hover:text-xl hover:cursor-pointer"
            onClick={onTempLink}
          >
            Roadmap
          </li>
          <li
            className="inline-block mr-5 text-white font-roboto text-lg hover:text-xl hover:cursor-pointer"
            onClick={onTempLink}
          >
            Mint
          </li>
          <li
            className="inline-block mr-5 text-white font-roboto text-lg hover:text-xl hover:cursor-pointer"
            onClick={onTempLink}
          >
            Tribe
          </li>
        </ul>
        {!isConnected ? (
          <button
            onClick={connect}
            className="bg-yellow-500 rounded overflow px-2 py-2 mr-3 transition-colors duration-150 focus:drop-shadow-xl  hover:bg-yellow-400"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={connect}
            className="bg-yellow-500 rounded overflow px-2 py-2 mr-3 transition-colors duration-150 focus:drop-shadow-xl hover:bg-yellow-400"
          >
            Connected!
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
