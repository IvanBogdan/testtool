export class Consts {

  public static HOST = 'http://195.208.109.61:807';

  public static BD_URL = Consts.HOST + '/ATTP';

  public static LOGIN_URL = Consts.BD_URL + '/auth/login';
  public static LOGOUT_URL = Consts.BD_URL + '/auth/logout';
  public static CHECK_LOGIN_URL = Consts.BD_URL + '/auth/check';

  public static USER_URL = Consts.BD_URL + '/users/user';
  public static USER_BY_TOKEN_URL = Consts.BD_URL + '/users/userByToken';
}
