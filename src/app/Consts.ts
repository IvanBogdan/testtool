export class Consts {
  public static BD_URL = 'http://localhost:8080';

  public static LOGIN_URL = Consts.BD_URL + '/auth/login';
  public static LOGOUT_URL = Consts.BD_URL + '/auth/logout';
  public static CHECK_LOGIN_URL = Consts.BD_URL + '/auth/check';

  public static USER_URL = Consts.BD_URL + '/users/user';
  public static USER_BY_TOKEN_URL = Consts.BD_URL + '/users/userByToken';
}
