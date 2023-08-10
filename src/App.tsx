import "./App.css";
import Image from "./components/Image";
import Summary from "./components/Summary";
import useStore from "./store";

function App() {
  const { products, removeFromCart, clearCart } = useStore();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-screen-xl p-8 flex flex-col gap-4">
        <h1 className="font-semibold text-3xl">Shopping Cart</h1>
        <div className="flex gap-4 md:gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-4 grow">
            <table className="table-auto text-left border-b border-gray-200">
              <thead className="border-b border-gray-200">
                <tr className="text-sm h-12">
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const {
                    id,
                    title,
                    img,
                    type,
                    variants,
                    price,
                    quantity,
                    subTotal,
                  } = product;
                  return (
                    <tr key={id} className="align-top">
                      <td className="py-3">
                        <div className="flex gap-4">
                          <div className="relative w-36 aspect-square overflow-hidden">
                            <Image
                              src={img}
                              className="w-full h-full object-cover rounded-md group-hover:scale-125 filter-none group-hover:filter contrast-[115%] transition-all duration-200"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="font-medium">{title}</p>
                            <p className="font-thin text-gray-400 text-sm">
                              {type}
                            </p>
                            <p className="font-thin text-gray-400 text-sm">
                              {variants}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3">${price}</td>
                      <td className="py-3">{quantity}</td>
                      <td className="py-3">${subTotal}</td>
                      <td className="py-3">
                        <button onClick={() => removeFromCart(product)}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 6H6V12H7V6Z" fill="#F5222D" />
                            <path d="M10 6H9V12H10V6Z" fill="#F5222D" />
                            <path
                              d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z"
                              fill="#F5222D"
                            />
                            <path d="M10 1H6V2H10V1Z" fill="#F5222D" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-between items-center">
              <button className="w-48 bg-gray-50 p-2 text-gray-400 border-2 rounded-full text-sm flex flex-nowrap gap-3 items-center justify-center">
                Continue Shopping
              </button>
              <button
                className="w-48 bg-black p-2 text-white border-2 rounded-full text-sm flex flex-nowrap gap-3 items-center justify-center"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default App;
