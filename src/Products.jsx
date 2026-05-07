import { useEffect, useState } from "react"

export const Products = () => {
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState('')

  useEffect(() => {
    getproducts()
  }, [])

  const getproducts = async () => {


    try {
      let response = await fetch('https://dummyjson.com/products')
      let data = await response.json()
      console.log(data);

      setproducts(data.products)
      setloading(false)

    } catch (error) {
      console.log(error);
      seterror('failed to load products')
      setloading(false)

    }
  }

  if (loading) {
    return <h1>loading products.....</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
     
<div className="min-h-screen bg-gray-100 px-12 py-2">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">    {
      products.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white rounded-xl border p-3 hover:shadow-md transition flex flex-col"
          >

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-28 object-contain rounded-lg"
            />

            <p className="text-xs text-gray-500 mt-2">
              ⏱ 18 MINS
            </p>

            <div className="mt-1 text-sm font-semibold text-gray-800 leading-snug">
              {item.title}
            </div>

            <p className="text-xs text-gray-500 mt-1">
              1 unit
            </p>

            <div className="flex justify-between items-center mt-3">
              <h1 className="text-sm font-bold">
                ₹{item.price}
              </h1>

              <button className="border border-green-600 text-green-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-600 hover:text-white transition">
                ADD
              </button>
            </div>

          </div>
        )
      })
    }
  </div>
</div>
    </>
  )
}