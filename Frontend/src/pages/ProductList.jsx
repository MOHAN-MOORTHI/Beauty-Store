import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between m-4">
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center ">
          <span className="fext-lg font-semibold mr-4">Filter Products</span>
          <select name="concern" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4 ">
            <option value="">Dry skin</option>
            <option value="">Pigmentation</option>
            <option value="">oil control</option>
            <option value="">Anti Acne</option>
            <option value="">Sunburn</option>
            <option value="">Skin Brightening</option>
            <option value="">Tan Removal</option>
            <option value="">Night Routine</option>
            <option value="">UV Protection</option>
            <option value="">Damaged hair</option>
            <option value="">Frizzy Hair</option>
            <option value="">Stretch Marks</option>
            <option value="">Color Protection</option>
            <option value="">Dry hair</option>
            <option value="">Soothing</option>
            <option value="">Dandruff</option>
            <option value="">Greying</option>
            <option value="">Hairfall</option>
            <option value="">Well Being</option>
            <option value="">Acne</option>
            <option value="">Hair Growth</option>
          </select>
          <select name="" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4 ">
            <option value="">Garnier</option>
            <option value="">Kylie</option>
            <option value="">Kiss Beauty</option>
            <option value="">Dr Rashel</option>
            <option value="">Luren</option>
            <option value="">Nivea</option>
            <option value="">Heaven Dove</option>
            <option value="">Disaar</option>
            <option value="">Johnsons Baby</option>
            <option value="">Rexona</option>
            <option value="">Kylie </option>
          </select>
        </div>
        {/* Right */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="fext-lg font-semibold mr-4">Sort Products</span>
          <select name="price" id="">
            <option value="newest">Newest</option>
            <option value="asc">Price (asc) </option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductList;
