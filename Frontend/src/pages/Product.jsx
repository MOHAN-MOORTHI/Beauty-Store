import { Rating } from "react-simple-star-rating";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = () => {
  return (
    <div className="h-auto flex justify-stretch p-[30px] ">
      {/* LEFT */}
      <div className="flex-1 h-[500px] w-[600px] ">
        <img
          src="/lotion2.jpg"
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
      {/* RIGHT */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-5 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </h2>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          itaque quibusdam non quae unde ad obcaecati nobis nostrum, ratione
          repellendus atque aliquid dolorum odit mollitia porro, fugit
          reprehenderit. Provident, veniam. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Cupiditate veritatis eveniet
          exercitationem sint, libero quisquam eius nobis mollitia velit
          molestiae fugiat quas reiciendis repudiandae ipsam dolore. Beatae
          autem facere deleniti.
        </span>
        <h2 className="font-semibold mt-2 text-[20px] "> $ 90</h2>
        <span className="flex items-center">
          <Rating
            readonly
            initialValue={3}
            size={20}
            SVGstyle={{ display: "inline-block" }}
          />
          &nbsp;(2)
        </span>
        <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
            WHAT'S IN THE BOX
          </h2>
          <hr className="mb-4" />
          <span className="block text-gray-600 text-base text-[16px]">
            1 Garnier Even & Matte Vitamin C cleansing Foam 500ml{" "}
          </span>
        </div>
        <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm p-3 rounded-full shadow-md">
          Wholesdale Available : $70 as from 10 items
        </div>
        <div className="flex items-center my-5 p-4">
          <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl " />
          <span className="text-lg font-semibold mx-4">1</span>
          <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl " />
        </div>
        <button className="bg-[#1e1e1e] p-2.5 w-[200px] text-white cursor-pointer ">
          Add to cart
        </button>
        <hr className="my-6" />
        <div className="flex flex-col">
          <h2 className="font-semibold text-[18px]">Reviews</h2>
          <div className="flex items-center">
            <Rating
              readonly
              initialValue={3}
              size={20}
              SVGstyle={{ display: "inline-block" }}
            />
            <span className="font-semibold mx-5">John. K.D</span>
          </div>
          <div className="flex items-center">
            <Rating
              readonly
              initialValue={3}
              size={20}
              SVGstyle={{ display: "inline-block" }}
            />
            <span className="font-semibold mx-5">Siva T.K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
