import PaypalIcon from "./PaypalIcon";

const Summary = () => {
  return (
    <div className="w-96 flex flex-col gap-3 px-8 py-6 bg-[#F6F7FF] shadow-sm rounded-md">
      <h3 className="font-semibold text-2xl">Summary</h3>
      <p className="text-lg font-medium">Estimate Shipping and Tax</p>
      <p className="text-sm font-thin text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
        temporibus mollitia repellendus neque sunt ea dolore iure consectetur
        pariatur blanditiis.
      </p>
      <p className="text-lg font-medium">Apply Discount Code</p>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex justify-between gap-4">
        <p className="text-sm font-semibold">Subtotal</p>
        <p className="text-sm font-semibold">$1300</p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Shipping</p>
          <p className="text-[10px] text-gray-400 font-thin max-w-[80%]">
            (Standard Rate - Price may vary depending on the item/destination.
            TECS Staff will contact you.)
          </p>
        </div>
        <p className="text-sm font-semibold">$21</p>
      </div>
      <div className="flex justify-between gap-4">
        <p className="text-sm font-semibold">Tax</p>
        <p className="text-sm font-semibold">$12</p>
      </div>
      <div className="flex justify-between gap-4">
        <p className="text-sm font-semibold">Order Total</p>
        <p className="text-lg font-semibold">$121312</p>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <button className="bg-blue-600 grow p-3 text-white rounded-full text-sm font-semibold">
        Proceed to Checkout
      </button>
      <button className="bg-yellow-400 grow p-3 text-[#232C65] rounded-full text-sm font-semibold flex flex-nowrap gap-3 items-center justify-center">
        Checkout with <PaypalIcon />
      </button>
      <button
        disabled
        className="bg-gray-50 grow p-3 text-gray-400 border-2 rounded-full text-sm font-semibold flex flex-nowrap gap-3 items-center justify-center"
      >
        Checkout with Buy Now Pay L`ater
      </button>
    </div>
  );
};

export default Summary;
