// import { useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
// // import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { syncSignIn, signOut } from './redux/auth/actions'
// import { onAuthStateChanged } from './services/auth'
// import { deleteUserName } from './redux/user/actions'

// import * as ROUTES from './routes/routes'
// import PrivateRoute from './ui/views/components/PrivateRoute/PrivateRoute'
// import Auth from './ui/views/pages/Auth/Auth'
// import ResetPassword from './ui/views/pages/ResetPassword/ResetPassword'
// import Layout from './ui/views/layout/Layout'
// import Dashboard from './ui/views/pages/Dashboard/Dashboard'
// import Profile from './ui/views/pages/Profile/Profile'
// import MyTracks from './ui/views/pages/MyTracks/MyTracks'
// import Favourites from './ui/views/pages/Favourites/Favourites'
// import EditTrack from './ui/views/pages/EditTrack/EditTrack'
// import MyPlaylists from './ui/views/pages/MyPlaylists/MyPlaylists'
// import PlaylistDetail from './ui/views/pages/PlaylistDetail/PlaylistDetail'
// import EditPlaylist from './ui/views/pages/EditPlaylist/EditPlaylist'
// import Search from './ui/views/pages/Search/Search'
// import UserDetail from './ui/views/pages/UserDetail/UserDetail'

// function App() {
//   // const navigate = useNavigate()
//   const dispatch = useDispatch()
//   // const userName = useSelector((state) => state.user)
//   // const data = { userName: userName }

//   useEffect(() => {
//     let unsubscribeFromAuth = null

//     unsubscribeFromAuth = onAuthStateChanged((user) => {
//       if (user) {
//         localStorage.setItem('authToken', user.Aa)
//         const localUserName = localStorage.getItem('userName')
//         dispatch(syncSignIn({ userName: localUserName }))
//         if (localUserName) {
//           dispatch(deleteUserName())
//           localStorage.removeItem('userName')
//         }
//       } else {
//         localStorage.setItem('authToken', null)
//         // navigate('/')
//         dispatch(signOut())
//       }
//     })

//     return () => {
//       if (unsubscribeFromAuth) {
//         unsubscribeFromAuth()
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch])

//   return (
//     <Routes>
//       <Route index path={ROUTES.AUTH} element={<Auth />} />
//       <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
//       <Route path="/" element={<Layout />}>
//         <Route
//           index
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         ></Route>

//         <Route
//           path={ROUTES.PROFILE}
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.MY_TRACKS}
//           element={
//             <PrivateRoute>
//               <MyTracks />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.FAVOURITES}
//           element={
//             <PrivateRoute>
//               <Favourites />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.MY_PLAYLISTS}
//           element={
//             <PrivateRoute>
//               <MyPlaylists />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.EDIT_TRACK}
//           element={
//             <PrivateRoute>
//               <EditTrack />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.PLAYLIST_DETAIL}
//           element={
//             <PrivateRoute>
//               <PlaylistDetail />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.EDIT_PLAYLIST}
//           element={
//             <PrivateRoute>
//               <EditPlaylist />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.SEARCH}
//           element={
//             <PrivateRoute>
//               <Search />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path={ROUTES.USER_DETAIL}
//           element={
//             <PrivateRoute>
//               <UserDetail />
//             </PrivateRoute>
//           }
//         />
//       </Route>
//     </Routes>
//   )
// }

// export default App
