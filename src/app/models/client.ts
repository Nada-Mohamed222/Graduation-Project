export class Client{
    Email: String;
    UserName: String;
    FirstName: String;
    LastName: String;
    Password: String;
    isVerified: Boolean;
    ImageURL: String;
    Country: String;
    Jobs:Array<Object>=[];
    createdAt:String;
}