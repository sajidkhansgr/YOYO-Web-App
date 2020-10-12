export class HttpHelper{

  public static errMessage(err: any){
    if(err && err.error && Array.isArray(err.error.responseException) && err.error.responseException.length>0 && err.error.responseException[0]!=''){
      let msg: string = '';
      for(let k=0;k<err.error.responseException.length;k++){
        msg+=err.error.responseException[k];
        if(err.error.responseException.length-1>k)
          msg+=' ';
      }
      return msg;
    }else if(err && err.error && typeof (err.error.responseException)==='string'){
      return err.error.responseException;
    }else{
      return 'Please try after some time';
    }
  }

  public static getBasePath(): string{
    return window.location.protocol + "//" + window.location.hostname;
  }

  public static redirectToUrl(url: any): any{
    if(url){
      window.location = url;
    }else{
      return '/hub/1/list';
    }
  }

}
