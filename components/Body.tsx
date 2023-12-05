'use client';

import { useMenuContext } from '@/context/menuState';
import Profile from '@/components/Page/Profile';

function Body() {
  const { currentPage } = useMenuContext();

  if (currentPage === 0) return <Profile />;
  return <Profile />;
}

export default Body;
