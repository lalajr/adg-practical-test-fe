export abstract class AbstractComponent {

  // Extraction of data from JSON and handle error response
  public handleError(error: any) {

    let data = error.error;
    let errMsg = (data.message) ? data.message : 'undefined error';
    return this.errorNotification(errMsg);
  }

  errorNotification(message: string) {
    alert(message);
  }
}
