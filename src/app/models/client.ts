export class Client {
  Email: String;
  UserName: String;
  FirstName: String;
  LastName: String;
  Password: String;
  isVerified: Boolean;
  ImageURL: String;
  Country: String;
  Jobs: Array<Object> = [];
  createdAt: String;

  constructor(
    Password: String,
    Email: String,
    FirstName?: String,
    LastName?: String,
    UserName?: String
  ) {
    this.Email = Email;
    this.UserName = UserName;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Password = Password;
  }
}
