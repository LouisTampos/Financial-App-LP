import Visa from "../assets/logo-wall/visa.png";
import Gcash from "../assets/logo-wall/Gcash.webp";
import Paypal from "../assets/logo-wall/paypal.png";
import Paymaya from "../assets/logo-wall/Paymaya.webp";
import BDO from "../assets/logo-wall/BDO.webp";
import Atome from "../assets/logo-wall/Atome.webp";
import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Easily connect your accounts to Finance Me. With over 200+ <br />
          integrations, Finance Me works seamlessly with popular payment
          platforms like GCash, PayMaya, and many more.
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Visa}
          src2={Paypal}
          src3={Paymaya}
          alt1="Visa logo"
          alt2="Paypal logo"
          alt3="Paymaya logo"
        />
      </div>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={BDO}
          src2={Atome}
          src3={Gcash}
          alt1="BDO logo"
          alt2="Atome logo"
          alt3="Gcash logo"
        />
      </div>
    </section>
  );
}

export default Partners;
