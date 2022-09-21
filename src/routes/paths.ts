export const WEB_PATHS = {
  home: '/',
  photoProvince: '/province/:province',
  logIn: '/log-in',
  signUp: '/sign-up',
  category: '/category',
  photoDetails: '/details/:photoId',
  profile: '/profile/:id',
  page404: '/error-404',
  page500: '/error-500'
};

// /province/kujawsko-pomorskie -> ?province="x"&"photographer-name"...
// http://localhost:3000/province/lubelskie
// http://localhost:3000?province=lubelskie&rating=