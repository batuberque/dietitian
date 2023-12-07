import { Link } from "react-router-dom";

import "./header.css";

const HeaderComponent: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <span>
          <Link to={"/"}>EIC SAYFASI</Link>
        </span>
      </div>
      <div className="titles">
        <span>
          <Link to={"/post"}>Postlar</Link>
        </span>
        <span>Sayfalar</span>
      </div>
    </div>
  );
};

export default HeaderComponent;
