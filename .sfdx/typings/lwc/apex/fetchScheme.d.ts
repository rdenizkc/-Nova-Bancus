declare module "@salesforce/apex/fetchScheme.fetchCustomerType" {
  export default function fetchCustomerType(param: {fdId: any}): Promise<any>;
}
declare module "@salesforce/apex/fetchScheme.fetchInterestScheme" {
  export default function fetchInterestScheme(param: {custType: any, depType: any, payFreq: any, tenMonths: any, tenorDays: any, fdAmount: any, fdId: any}): Promise<any>;
}
