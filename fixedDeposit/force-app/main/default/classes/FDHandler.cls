public class FDHandler {
 
    public static void populateRO(List<FD_Details__c > fdList){
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
  }  
    
    /*List<FD_Details__c> fdList = Trigger.new;
    
    List<String> branchName = new List<String>();

    // FD_Details__c kayıtlarının "Branch__c" alanlarını topla
    for (FD_Details__c fdRecord : fdList) {
        branchName.add(fdRecord.Branch__c);
    }

    // Branch_Relationship_Officer__c tablosundan ilişki görevlisi bilgilerini getir
    List<Branch_Relationship_Officer__c> br = [SELECT Id, Branch_Name__c, Relationship_Officer__c FROM Branch_Relationship_Officer__c WHERE Branch_Name__c IN :branchName];

    // FD_Details__c kayıtlarını güncelle
    for (FD_Details__c fdRecord : fdList) {
        
        for (Branch_Relationship_Officer__c brRecord : br) {
            if (fdRecord.Branch__c == brRecord.Branch_Name__c) {
                fdRecord.Relationship_Officer__c = brRecord.Relationship_Officer__c;
            }
        }
    } */