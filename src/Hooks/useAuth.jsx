import {
  selectUserData,
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
} from '../Redux/auth/AuthSlice.selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);
  const user = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
