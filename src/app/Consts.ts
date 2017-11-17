export class Consts {

  public static HOST = 'localhost';
  public static PORT = '8080';
  // public static HOST = '195.208.109.61';
  // public static PORT = '807';

  public static HOST_URL = 'http://' + Consts.HOST + ':' + Consts.PORT;

  public static BD_URL = Consts.HOST + '/ATTP';

  public static LOGIN_URL = Consts.BD_URL + '/auth/login';
  public static LOGOUT_URL = Consts.BD_URL + '/auth/logout';
  public static CHECK_LOGIN_URL = Consts.BD_URL + '/auth/check';

  public static USER_URL = Consts.BD_URL + '/users/user';
  public static USER_BY_TOKEN_URL = Consts.BD_URL + '/users/userByToken';
}
