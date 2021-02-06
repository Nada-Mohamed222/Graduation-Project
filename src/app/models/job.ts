export class Job {
  //job properties

  //start data
  Name: string;
  Category: string;
  Description: string;
  additionalFiles?: string;

  // details data
  JobType: string;
  Skills?: string;
  freelancerNumber: number;
  ExpertiseLevel: string;
  screeningQuestion?: string;

  // budget data
  // EarningType: string;
  // Earning: number;

  PaymentType: string;
  Price: number;
  Duration: number;

  constructor(
    Name: string,
    Category: string,
    Description: string,

    JobType: string,
    Skills: string,
    ExpertiseLevel: string,
    // freelancerNumber: number = 4,

    PaymentType: string,
    Price: number,
    // payment={"fixed":10}

    // PaymentType: { [EarningType: string] : number | string },
    // PaymentType: { [EarningType: string] : [price: number | string] },
    // PaymentType: { (EarningType: string):(price: number) },
    // EarningType: boolean,
    // Earning: number,

    Duration: number
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
