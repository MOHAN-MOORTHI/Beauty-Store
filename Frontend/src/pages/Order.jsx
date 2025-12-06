import { FaCheckCircle } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8 ">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 " />
          <h1 className="text-3xl font-bold">Thank you for your Orders!</h1>
          <p className="text-gray-600 mt-2 ">
            Here are the details of your recent Orders.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 ">Order #1</h2>
          <div className="space-y-4 ">
            <div className="bg-gray-50 p-4 rounded-lg ">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
              <div className="flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center justify-evenly border-b border-gray-200 pb-4 ">
                    <img
                      src="/lotion.jpg"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4 ">
                      <h4 className="text-lg font-semibold ">
                        Mekis Grapeseed & Sweet Almond Oil-30Ml, for Dull
                      </h4>
                      <p className="text-gray-600">2</p>
                    </div>
                    <div className="text-right ">
                      <p className="text-lg font-bold ">$90</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3>Rate this product</h3>
                    <Rating
                      readonly
                      initialValue={3}
                      size={20}
                      fillColor="gray"
                      SVGstyle={{ display: "inline-block" }}
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="Leave a message "
                      className="p-2.5 w-[300px] mt-3 "
                    ></textarea>
                    <button className="bg-[#1e1e1e] mt-3 w-[200px] text-white ">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-evenly border-b border-gray-200 pb-4 ">
                    <img
                      src="/lotion.jpg"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4 ">
                      <h4 className="text-lg font-semibold ">
                        Mekis Grapeseed & Sweet Almond Oil-30Ml, for Dull
                      </h4>
                      <p className="text-gray-600">2</p>
                    </div>
                    <div className="text-right ">
                      <p className="text-lg font-bold ">$90</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3>Rate this product</h3>
                    <Rating
                      readonly
                      initialValue={3}
                      size={20}
                      fillColor="gray"
                      SVGstyle={{ display: "inline-block" }}
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="Leave a message "
                      className="p-2.5 w-[300px] mt-3 "
                    ></textarea>
                    <button className="bg-[#1e1e1e] mt-3 w-[200px] text-white ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibi mb-2 ">Shipping Information</h3>
          <p className="text-gray-600">ksfjkjshfjaf@gmail.com</p>
          <p className="text-gray-600 ">(8676) 867 8676</p>
          <p className="text-gray-600 ">John K.D</p>
        </div>
        <div className="bg-gray-50 rounded-lg my-2 ">
          <h3 className="text-xl font-semibold mb-2 ">Payment Method</h3>
          <p className=" text-gray-600 ">VISA</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Order summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium ">Subtotal:</span>
            <span className="text-lg font-semibold ">$720</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium ">Subtotal:</span>
            <span className="text-lg font-semibold ">$30</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-medium ">Total:</span>
            <span className="text-lg font-semibold ">$750</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold ">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
