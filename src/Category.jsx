import { useNavigate } from "react-router";

export const Category=()=>{
  let navigate = useNavigate()
  const categories = [
  {
    name: "beauty",
    image:
      "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "fragrances",
    image:
      "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
  },
  {
    name: "groceries",
    image:
      "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
  },
  {
    name: "furniture",
    image:
      "https://cdn-icons-png.flaticon.com/512/3081/3081967.png",
  },
];
  return(
    <>
<h1 className="text-4xl font-bold text-center mb-8 animate-bounce text-blue-600">
  Categories
</h1>   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {categories.map((item, index) => (
      <div
      key={index} onClick={()=>navigate(`/category/${item.name}`)}
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-contain"
        />

        <p className="mt-2 font-semibold text-sm">
          {item.name}
        </p>
      </div>
    ))}
  </div>
    </>
  )
}