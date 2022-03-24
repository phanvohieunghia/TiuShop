import React from "react";
import "./_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUsers,
  faCartPlus,
  faPuzzlePiece,
  faSearch,
  faShoppingBag,
  faUser,
  faUserCircle,
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="hd-left col-md-2 col">
            <img
              className="hd-left__img col"
              src="/img/header/uto logo image.png"
              alt="error png"
            />
          </div>
          <div className="hd-main col-md">
            {/* Đào tạo */}
            <div className="hd-main__item">
              <div className="hd-main__logo">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="hd-main__text">Đào tạo</div>
            </div>
            {/* Cộng đồng */}
            <div className="hd-main__item">
              <div className="hd-main__logo">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="hd-main__text">Cộng đồng</div>
            </div>
            {/* Sản thương mại */}
            <div className="hd-main__item">
              <div className="hd-main__logo">
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
              <div className="hd-main__text">Sản thương mại</div>
            </div>
            {/* Dịch vụ */}
            <div className="hd-main__item">
              <div className="hd-main__logo">
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
              <div className="hd-main__text">Dịch vụ</div>
            </div>
          </div>
          <div className="hd-right col-md-3">
            {/* Search */}
            <div className="hd-right__item">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            {/* ShoppingBag */}
            <div className="hd-right__item">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            {/* faUser */}
            <div className="hd-right__item">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="hd-right-mb col">
            {/* Search */}
            <div className="hd-right-mb__item">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            {/* Shopping */}
            <div className="hd-right-mb__item">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            {/* User */}
            <div className="hd-right-mb__item">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            {/* Menu */}
            <div className="hd-right-mb__item">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;