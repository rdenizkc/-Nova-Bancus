@isTest
public class fdTriggerTest {
    public static void createFd(){
        
 FD_Details__c fd = new FD_Details__c(
     Branch__c='Alabama',
     Application_Form_No__c='23',
     Customer_Type__c='Individual',
     Sourcing_Channel__c='Teleservice' );
        
    insert fd;
        
        
 Branch_Relationship_Officer__c  branch = new Branch_Relationship_Officer__c(Branch_Name__c = 'Alabama' , Relationship_Officer__c='Blue BranchO');
     insert branch; 
    }

}