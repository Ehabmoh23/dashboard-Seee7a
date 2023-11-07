import {
	HiOutlineCube,
	HiOutlineUsers,
	HiCake,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiHome,
	HiFilm,
	HiTruck,
	HiCalendarDays
  } from 'react-icons/hi';
  
  export const DASHBOARD_SIDEBAR_LINKS = [
	{
	  key: 'profile',
	  label: 'Profile',
	  path: '/profile', 
	  icon: <HiOutlineUsers />
	},
	{
	  key: 'hotels',
	  label: 'Hotels',
	  path: '/', 
	  icon: <HiHome />
	},
	{
	  key: 'restaurants',
	  label: 'Restaurants',
	  path: '/restaurants', 
	  icon: <HiCake />
	},
	{
	  key: 'car-rental',
	  label: 'Car-Rental',
	  path: '/car-rental', 
	  icon: <HiTruck />
	},
	{
	  key: 'activities',
	  label: 'Activities',
	  path: '/activities', 
	  icon: <HiFilm />
	},
	{
	  key: 'events',
	  label: 'Events',
	  path: '/events', 
	  icon: <HiOutlineAnnotation />
	},
	{
	  key: 'reports',
	  label: 'Reports',
	  path: '/reports', 
	  icon: <HiOutlineAnnotation />
	}
  ];
  
  export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
	  key: 'settings',
	  label: 'Settings',
	  path: '/settings',
	  icon: <HiOutlineCog />
	},
	{
	  key: 'support',
	  label: 'Help & Support',
	  path: '/support', 
	  icon: <HiOutlineQuestionMarkCircle />
	}
  ];
  
