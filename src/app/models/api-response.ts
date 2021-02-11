export interface ApiResponse {
  // sign up response prop
  Countery?: string;
  Email?: string;
  FirstName?: string;
  ImageURL?: string;
  Jobs?: [];
  LastName?: string;
  // what i need
  UserName: string;
  isVerified: boolean;

  __v?: number;
  _id?: string;

  //log in response prop
  token: string;
}
