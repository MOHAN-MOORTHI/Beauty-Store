const Home = () => {
  return (
    <div className="flex justify-between h-screen p-2 bg-gray-300 ">
      {/* LEFT */}
      <div className="flex flex-col w-2/3 ">
        <div className="flex  ">
          <div className="bg-white h-52 w-52 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
            <div className="h-32 w-32 m-5 border-[10px] border-blue-400 border-solid rounded-full flex items-center justify-center ">
              <h2 className="font-bold text-2xl ">699</h2>
            </div>
            <h2 className="font-semibold text-xl ">Orders</h2>
          </div>
          <div className="bg-white h-52 w-52 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
            <div className="h-32 w-32 m-5 border-[10px] border-red-400 border-solid rounded-full flex items-center justify-center ">
              <h2 className="font-bold text-2xl ">100</h2>
            </div>
            <h2 className="font-semibold text-xl ">Products</h2>
          </div>
          <div className="bg-white h-52 w-52 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center ">
            <div className="h-32 w-32 m-5 border-[10px] border-gray-400 border-solid rounded-full flex items-center justify-center ">
              <h2 className="font-bold text-2xl ">200</h2>
            </div>
            <h2 className="font-semibold text-xl ">Users</h2>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white m-5 p-5 rounded-lg ">
          <div className="p-5 bg-white rounded-md " >
            <h3 className="min-w-full table-auto" >Latest Transactions</h3>
            <table className="" >
              <thead>
                <tr className="bg-gray-300">
                <th className="py-2 px-4" >Customer</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" >
                  <td className="py-2 px-4">John K.D</td>
                  <td className="py-2 px-4">$ 687</td>
                  <td className="py-2 px-4  text-green-500">Approved</td>

                </tr>
                <tr className="border-b" >
                  <td className="py-2 px-4">John K.D</td>
                  <td className="py-2 px-4">$ 687</td>
                  <td className="py-2 px-4 text-red-500">Approved</td>

                </tr>
                <tr className="border-b" >
                  <td className="py-2 px-4">John K.D</td>
                  <td className="py-2 px-4">$ 687</td>
                  <td className="py-2 px-4  text-green-500">Approved</td>

                </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>
      {/* Right */}
      <div></div>
    </div>
  );
};

export default Home;
