export class User {
  constructor(
    // userName: string,
    private _token: string,
    private _tokenExpirationalDate?: Date
  ) {}

  //special prop return the value after some manipulation
  //prevent prop overwriting
  get token() {
    //
    // TODO: suppose to check if the token expired
    //
    return this._token;
  }
}
