import { Link } from "react-router-dom/cjs/react-router-dom"


const Catg = () => {
  const data = [
    {
      cateName: "Apple",
      link: "/apple"
    },
    {
      cateName: "Samsung",
      link: "/samsung"
    },
    // {
    //   cateName: "Oppo",
    // },
    // {
    //   cateName: "Vivo",
    // },
    {
      cateName: "Xiaomi",
      link: "/xiaomi"
    },
    // {
    //   cateName: "Sony",
    // },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <Link to={value.link}>
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
            </Link>
          )
        })}
        
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
