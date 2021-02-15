export class Job {
  EmployerUserName: String;
  Name: String;
  Category: String;
  Description: String;
  JobType: String;

  // may cause error
  Skills: string;

  ExpertiseLevel: String;
  TalentsRequired: Number;
  Country: String;
  JobSuccessScore: Number;
  EnglishLevel: String;
  Earning: Number;
  PaymentType: String;
  Price: Number;
  Duration: Number;
  WeeklyHoursRequired: Number;
  EmployerRating: Number;
  EmployerReview: String;
  TalentUserName: String;
  TalentRating: Number;
  TalentReview: String;
  // Proposals?: Array<object> = [{Talent: String, CoverLetter: String }];
  ConnectsNeeded: number;
  Status: String;
  createdAt: String;
  _id: String;

  constructor(
    Name?: string,
    Category?: string,
    Description?: string,

    JobType?: string,
    Skills?: string,
    ExpertiseLevel?: string,

    PaymentType?: string,
    Price?: number,

    Duration?: number
  ) {
    this.Name = Name;
    this.Category = Category;
    this.Description = Description;

    this.JobType = JobType;
    this.Skills = Skills;
    this.ExpertiseLevel = ExpertiseLevel;
    // this.freelancerNumber = freelancerNumber;

    this.PaymentType = PaymentType;
    this.Price = Price;
    // this.EarningType = EarningType;
    // this.Earning = Earning;
    this.Duration = Duration;
  }
}
