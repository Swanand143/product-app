import "./proview.css";
import { useParams } from "react-router-dom";
import products from "../../data";

function BlogView() {
  const { id } = useParams();

  const viewProducts = products.find((blogObject) => blogObject.id === id);
  return (
    <div className="View-cards">
      <h1>{viewProducts.name}</h1>
      <div className="view-image">
        <img src={viewProducts.imageUrl} alt={viewProducts.name} />
      </div>
      <div className="View-price-container">
        <p className="View-price">{viewProducts.price}</p>
      </div>
      <div className="View-content-container">
        <ul>
          <li>
            <p className="View-content">{viewProducts.info.part1}</p>
          </li>
          <li>
            <p className="View-content">{viewProducts.info.part2}</p>
          </li>
          <li>
            <p className="View-content">{viewProducts.info.part3}</p>
          </li>
          <li>
            <p className="View-content">{viewProducts.info.part4}</p>
          </li>
          <li>
            <p className="View-content">{viewProducts.info.part5}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BlogView;
