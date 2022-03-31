const NavBar = ({ connect, isConnected }) => {
  return (
    <div className="flex justify-between py-2">
      <div className="ml-3 text-white text-lg">LOGO</div>
      <div className="justify-start">
        <ul className="inline-block">
          <li className="inline-block mr-3 text-white">link 1 </li>
          <li className="inline-block mr-3 text-white">link 2</li>
          <li className="inline-block mr-3 text-white">link 3</li>
        </ul>
        {isConnected ? (
          <button
            onClick={connect}
            className="bg-gray-400 rounded overflow hover:bg-gray-100 px-2 py-2 mr-3"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={connect}
            className="bg-gray-400 rounded overflow hover:bg-gray-100 px-2 py-2 mr-3"
          >
            Connected!
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
