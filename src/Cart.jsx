import React from 'react'

export const Cart = () => {

  const cartItems = [
    {
      id: 1,
      title: "Burger",
      price: 199,
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
    },
    {
      id: 2,
      title: "Pizza",
      price: 299,
      image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
    }
  ]

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price
  }, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      <h1 className="text-3xl font-bold mb-6">
        My Cart
      </h1>

      <div className="space-y-4">

        {
          cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Remove
                </button>

              </div>
            )
          })
        }

      </div>

      <div className="bg-white mt-6 p-5 rounded-xl shadow">

        <h2 className="text-2xl font-bold">
          Total: ₹{totalPrice}
        </h2>

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg mt-4">
          Checkout
        </button>

      </div>

    </div>
  )
}