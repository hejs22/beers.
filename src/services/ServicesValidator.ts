export default class ServicesValidation {
  static validateRequestParameters = (errorMessage: string, parameters: any[]) => {
    parameters.forEach((parameter) => {
      if (parameter === null || parameter === undefined) throw new Error(errorMessage);
    });
  };
}
