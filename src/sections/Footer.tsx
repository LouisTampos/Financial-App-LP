import Diagram from "../assets/logos/diagram.png";
function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img className="mb-4 w-36" src={Diagram} alt="Logo Diagram" />
            <p>Time is wealth, spend it wisely, use Finance Me.</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Product</p>
              <a href="#">Overview</a>
              <a href="#">Overview</a>
              <a href="#">Overview</a>
              <a href="#">Overview</a>
              <a href="#">Overview</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
