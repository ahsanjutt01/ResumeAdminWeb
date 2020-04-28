export class Work {
    constructor(
      public id: number = 0,
      public companyTitle: string = '',
      public title: string = '',
      public to: string = '',
      public from: string = '',
      public description: string = '',
      public isCurrentlyWorking: boolean = false,
    ) {}
  }
