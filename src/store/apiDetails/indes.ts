export enum RequestMethod {
  GET = "GET",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  PURGE = "PURGE",
  LINK = "LINK",
  UNLINK = "UNLINK",
}

export enum RequestBodyType {
  /**If request id in application/x-www-form-urlencoded as string*/
  QUERYSTRING = "QUERY-STRING",
  /**If request is in formdata*/
  FORMDATA = "FORM-DATA",
  /**If request requires Bearer*/
  AUTH = "AUTH",
  /**If request is open*/
  NOAUTH = "NO-AUTH",
}

/**
 * API detail with redux action associated with it
 */
export interface ApiDetailType {
  /**Redux Action Name */
  actionName: string;
  /**Request API URI */
  controllerName: string;
  /**Request Method; Defaults as GET */
  requestMethod?: RequestMethod;
  /**Request Body Type */
  requestBodyType?: RequestBodyType;
}

export const apiDetails = {
  getBookList: {
    controllerName: "/api/list_books",
    actionName: "GET_BOOK_LIST",
    requestMethod: RequestMethod.GET,
  },
};
