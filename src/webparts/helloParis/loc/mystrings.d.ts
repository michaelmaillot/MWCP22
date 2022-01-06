declare interface IHelloParisWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloParisWebPartStrings' {
  const strings: IHelloParisWebPartStrings;
  export = strings;
}
