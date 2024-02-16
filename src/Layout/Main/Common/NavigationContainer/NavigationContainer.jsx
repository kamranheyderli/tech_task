import React, { useCallback, useContext, useState } from 'react';
import styles from './NavigationContainer.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LayoutContext } from '../../../../Context/LayoutContext/LayoutContext.jsx';
import { Link } from 'react-router-dom';

export const NavigationContainer = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(LayoutContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.logoBlock}>
          <Link to="/">Logo</Link>
        </div>
        <div className={styles.mobileMenuBtn} onClick={handleOpenMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.navigationBlock}>
          <Link to="/">Haqqımızda</Link>
          <Link to="/">Kitablar</Link>
          <Link to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            İmtahanlar
            {showDropdown && (
            <div className={styles.dropdownContent}>
              <Link to="/exams">Imtahanlar</Link>
              
            </div>
          )}
          </Link>
          
          <Link to="/">Bizimlə əlaqə</Link>
          <select name="languageSelection" id="languageSelection" className={styles.languageSelection}>
            <option value="AZ" selected>AZ</option>
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="TR">TR</option>
          </select>
        </div>
      </div>
    </>
  );
};
