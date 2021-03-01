export class Freelancer {
    Email: String;
    UserName: String;
    FirstName: String;
    LastName: String;
    Password: String;
    isVerified: Boolean;
    MainService: String;
    Proposals: { Job: String, createdAt: String, CoverLetter: String }[];
    Skills: Array<String>;
    ExpertiseLevel: String;
    EnglishProficiency: String;
    HourlyRate: Number;
    Title: String;
    ProfessionalOverview: String;
    ImageURL: string = "uploads/avatar.png";
    Country: String;
    PhoneNumber: Number;
    Availability: String;
    Connects: number;
    SavedJobs: Array<String>;
    Earnings: Number = 0;
}