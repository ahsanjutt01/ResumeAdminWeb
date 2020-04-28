export class Profile {
    constructor(
      public id: number = 0,
      public firstName: string = '',
      public lastName: string = '',
      public title: string = '',
      public country: string = '',
      public city: string = '',
      public zipCode: string = '',
      public address: string = '',
      public phone: string = '',
      public website: string = '',
      public imageUrl: string = '',
      public to: string = '',
      public dob: string = '',
      public gender: boolean = true,
    ) {}
}
