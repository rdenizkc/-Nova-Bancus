trigger FDDetailsTrigger on FD_Details__c (before insert, before update,after insert , after update) {
    
    
 
    if(trigger.isBefore && (trigger.isInsert || trigger.isUpdate)){
        FDDetailsDTTriggerHandler.populateRO(trigger.new);
    
    }
    
    if(trigger.isAfter){
        if(trigger.isInsert){
            
             FDDetailsDTTriggerHandler.shareAfter(trigger.new);
            
        }else if(trigger.isUpdate){
             FDDetailsDTTriggerHandler.shareAfter(trigger.new);
             FDDetailsDTTriggerHandler.deleteSharingRO(trigger.new,trigger.oldMap);
        }
    }
    

    }