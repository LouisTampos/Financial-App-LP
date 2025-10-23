import Carousel from "../common/Carousel";
import StoreLinks from "../common/StoreLinks";

function Reviews() {
  const slides = [
    {
      src: "https://images.pexels.com/photos/13120756/pexels-photo-13120756.jpeg",
      text: '"Napakadaling gamitin, less hassle, quick and easy talaga broskie!"',
      name: "Marcus Andres",
      country: "Pampanga, PH",
    },
    {
      src: "https://images.pexels.com/photos/1623536/pexels-photo-1623536.jpeg",
      text: '"Sobrang hirap noon magbayad ng kuryente o kaya magpadala ng pera dahil kailangan pa namin pumonta sa bayan, pero dahil sa Finance Me, pinapadali neto ang buhay namin."',
      name: "Samuel Pascual",
      country: "Siargao, PH",
    },
    {
      src: "https://images.pexels.com/photos/14543604/pexels-photo-14543604.jpeg",
      text: '"NO WORDS CAN EXPLAIN!!! Thank you Finance Me sa pagpapadali ng aking buhay"',
      name: "Marcus Teodoro",
      country: "Dumaguete, PH",
    },
  ];
  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join thousands of people, use Finance Me.
        </h2>
        <StoreLinks />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
