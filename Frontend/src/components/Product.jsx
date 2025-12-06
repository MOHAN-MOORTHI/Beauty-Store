import { Rating } from "react-simple-star-rating";




const Product = ({img}) => {
  return (
    
      <div className="flex flex-col items-center justify-center h-[500px] m-2.5 cursor-pointer ">
        <img
          src={img}
          alt=""
          className="h-[400px] w-[300px] bg-cover "
        />
        <h2 className="font-semibold text-[18px w-[300px] ">
          Rosehip Seed, Argan, Sweet ALmond & Vitamin E oil-Anti-aging
        </h2>
        <span className="text-[18px] font-semibold flex items-center justify-center ">
          $100
        </span>

        <span className="flex items-center">
          <Rating
            readonly
            initialValue={3}
            size={20}
            SVGstyle={{ display: "inline-block" }}
          />
          &nbsp;(2)
        </span>
      </div>
    
  );
};

export default Product;
