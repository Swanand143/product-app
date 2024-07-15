import "./home.css";
import Products from "./../../data";
import Procard from "../../component/product-card/productcard";
function Home() {
  return (
    <>
    <h2>My Products</h2>
      <div className="card-container">
        {Products.map((proObject, i) => {
          const { id, name, imageUrl, description, price } = proObject;
          return (
            <Procard
              key={i}
              id={id}
              name={name}
              imageUrl={imageUrl}
              description={description}
              price={price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
