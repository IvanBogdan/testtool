export class Consts {

  // public static HOST = 'localhost';
  // public static PORT = '8080';
  public static HOST = '195.208.109.61';
  public static PORT = '807';

  public static HOST_URL = 'http://' + Consts.HOST + ':' + Consts.PORT;

  public static BD_URL = Consts.HOST_URL + '/ATTP';

  public static LOGIN_URL = Consts.BD_URL + '/auth/login';
  public static LOGOUT_URL = Consts.BD_URL + '/auth/logout';
  public static CHECK_LOGIN_URL = Consts.BD_URL + '/auth/check';

  public static USER_URL = Consts.BD_URL + '/users/user';
  public static USER_BY_TOKEN_URL = Consts.BD_URL + '/users/userByToken';

  public static PRODUCTS_URL = Consts.BD_URL + '/products';
  public static PRODUCT_ADD_URL = Consts.PRODUCTS_URL + '/add';

  public static ORDERS_URL = Consts.BD_URL + '/orders';
  public static ORDERS_BY_USER_ID_URL = Consts.ORDERS_URL + '/userId';
  public static ORDER_ADD_URL = Consts.ORDERS_URL + '/add';
}
