import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_object_info */
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveRecords from '@salesforce/apex/applicantDetails.saveRecords';
import FD_APPLICANT_OBJECT from '@salesforce/schema/FD_Applicant_Junction__c';
import Type_FIELd from '@salesforce/schema/FD_Applicant_Junction__c.Type__c';
// Example :- import greeting from '@salesforce/label/c.greeting';

export default class AddApplicant extends LightningElement {
//combobnox
    applicantTypeValue;
    applicantTypeOptions=[];
    @api recordId;
///add applicant button
    showAddApplicant=false;
    // i will put in this applicant object all data as key and value
    //
    applicantObject={};

@wire(getObjectInfo,{objectApiName:FD_APPLICANT_OBJECT})
fdAppdata;

@wire(getPicklistValues,{fieldApiName:Type_FIELd, recordTypeId:'$fdAppdata.data.defaultRecordTypeId'})
fdappTypedata({data,error}){
    if(data){
        console.log(data)
        let options=[];
        data.values.forEach(e => {
             options.push({
                label:e.label,
                value:e.value
            })
            console.log(`e.label: ${e.label}`)
            console.log(`e.value: ${e.value}`)
        })
        this.applicantTypeOptions=options;

    }if(error){
        console.log(error)

    }
}

applicantTypeHandleChange(event){
    this.applicantTypeValue=event.target.value;
    console.log(`the chosen applicant type value is ${this.applicantTypeValue}`);

}

 // when the button is clicked we check the validity 
 addApplicantHandler(){
    let isValid=true;
    let applTypeData=this.template.querySelectorAll('.validateCombobox');
    applTypeData.forEach(e=>{
        if(!e.checkValidity()){
            // if the values are not valid then we report validity
            e.reportValidity();
            isValid=false;
        }
    })
    // if the values are valid then we disable the button
    if(isValid){
        this.showAddApplicant=true;
    }

}

// Long way
/*  
firstNameHandler(event){
    this.applicantObject.Fistname__c= event.target.value;

}

lastNameHandler(event){
    this.applicantObject.Last_Name__c= event.target.value;

}
snnHandler(event){
    this.applicantObject.SSN__c= event.target.value;

}
dobHandler(event){
    this.applicantObject.DAte_Of_Birth__c= event.target.value;

}
mobileHandler(event){
    this.applicantObject.Mobile__c= event.target.value;

}
emailHandler(event){
    this.applicantObject.Email__c= event.target.value;

}
addressHandler(event){
    this.applicantObject.Address__c= event.target.value;

} */



handleChange(event){
    //1.step
    // const name =event.target.name;
    // const value =event.target.value;
    // this.applicantObject[name]=value;


    //2.step
    // const name =event.target;
    // const value =event.target;
    // this.applicantObject[name]=value;


    //3.step
    const {name,value} =event.target; 
    this.applicantObject[name]=value;

}
saveHandler(){
    //check the validity
let isValid=true;
let inputFields=this.template.querySelectorAll('lightning-input');

inputFields.forEach(e=>{
    if(!e.checkValidity()){
        e.reportValidity();
        isValid=false;
    }
    
});

let addressFieldsVal=this.template.querySelectorAll('lightning-textarea');

addressFieldsVal.forEach(e=>{
    if(!e.checkValidity()){
        e.reportValidity();
        isValid=false;
    }
});

if(isValid){
    console.log(`isValid ${isValid}`);
    saveRecords({
        appType:this.applicantTypeValue,
        fdId:this.recordId,
        objApp:this.applicantObject
    })
        .then(result => {
          console.log(result);  
          this.dispatchEvent(new ShowToastEvent({
              title: "Success",
              message: "The record is craeted successfuly",
              variant: "success"
          }));
        })
        .catch(error => {
            // TODO Error handling
            console.log(error);
            this.dispatchEvent(new ShowToastEvent({
                title: "Error Occured!!",
                message: "An error occured so we couldnt save the record , please check below error message"+JSON.stringify(error),
                variant: "error"
            }));
   
        });


}


}
}