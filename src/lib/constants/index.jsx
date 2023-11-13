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
		key: 'users',
		label: 'User',
		path: '/users', 
		icon: <HiHome />
	  
	},
	{
	  key: 'hotels',
	  label: 'Hotels',
	  path: '/hotels', 
	  icon: <HiHome />
	},
	{
	  key: 'reservitionhotels',
	  label: 'Reserve Hotels',
	  path: '/reservitionhotels', 
	  icon: <HiHome />
	},
	{
	  key: 'restaurants',
	  label: 'Restaurants',
	  path: '/restaurants', 
	  icon: <HiCake />
	},
	{
	  key: 'reservitionRestaurant',
	  label: 'Reserve Restaurant',
	  path: '/reservitionRestaurant', 
	  icon: <HiHome />
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
	
  ];
  
