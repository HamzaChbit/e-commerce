'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Header } from '../../../../payload/payload-types';
import { noHeaderFooterUrls } from '../../../constants';
import { Gutter } from '../../Gutter';
import { HeaderNav } from '../Nav';

import classes from './index.module.scss';

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
        </Link>
        {!showMenu ? (
          <div onClick={() => setShowMenu(true)} className={classes.menu}>
            <Image src="/assets/icons/menu.svg" alt="menu" width={25} height={25} />
          </div>
        ) : (
          <div onClick={() => setShowMenu(false)} className={classes.menu}>
            <Image src="/assets/icons/close.svg" alt="menu" width={25} height={25} />
          </div>
        )}

        <div className={classes.items}>
          <HeaderNav header={header} />
        </div>

        {showMenu && (
          <div className={classes.hamza}>
            <div className={classes.mobile}>
              <HeaderNav header={header} />
            </div>
          </div>
        )}
      </Gutter>
    </nav>
  );
};

export default HeaderComponent;
