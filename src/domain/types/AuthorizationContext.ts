import UserTokenData from './UserTokenData';

type AuthorizationContext = UserTokenData & {
  iat: number;
  exp: number;
};

export default AuthorizationContext;