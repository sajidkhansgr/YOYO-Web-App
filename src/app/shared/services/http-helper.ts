export class HttpHelper{

  public static errMessage(data: any){
    // console.log(data.Messages[0]!='', 'data');
    if(data && data.Messages && Array.isArray(data.Messages) && data.Messages.length>0 && data.Messages[0]!=''){
      let msg: string = '';
      // console.log("data.Messages",data.Messages);
      for(let k=0;k<data.Messages.length;k++){
        msg+=data.Messages[k];
        if(data.Messages.length-1>k)
        msg+=' ';
      }
      return msg;
    }else{
      return 'Please try after some time';
    }
  }

  public static saveData(data: any){
    localStorage.setItem("acsTkn", data.Data.Token);
    localStorage.setItem("mT", data.Data.MemberType == 'Patient' ? '1' : '2');
    localStorage.setItem("id", data.Data.EId);
    localStorage.setItem("eId", data.Data.EncryptedEId);
    localStorage.setItem("fN", data.Data.FullName);
    localStorage.setItem("p", data.Data.IsProfileAdded);
  }

  public static redirectToUrl(url: any, type: number): any{
    if(type==2){
      //login
      if(url){
        window.location = url;
      }else{
        return '/clinician/home';
      }
    }else{
      //patient
      if(url){
        window.location = url;
      }else{
        return '/patient/home';
      }
    }
  }

  public static getBasePath(): string{
    console.log(window.location.protocol)
    return window.location.protocol + "//" + window.location.hostname;
  }

}
