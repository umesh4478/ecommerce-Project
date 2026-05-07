const categories = [
  {
    name: "Pizza",
    image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
  },
  {
    name: "Burger",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
  },
  {
    name: "Drinks",
    image: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png"
  },
  {
    name: "Ice Cream",
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081967.png"
  },
  {
    name: "Cake",
    image: "https://cdn-icons-png.flaticon.com/512/2682/2682446.png"
  },
  {
    name: "Sandwich",
    image: "https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
  },
  {
    name: "Noodles",
    image: "https://cdn-icons-png.flaticon.com/512/2718/2718224.png"
  }
]

const Categories = () => {
  return (
    <div className="bg-gray-100 px-8 py-6">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Shop by Category
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">

        {
          categories.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />

                <h2 className="mt-3 text-sm font-semibold text-gray-700">
                  {item.name}
                </h2>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Categories