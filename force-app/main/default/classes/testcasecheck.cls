public class testcasecheck {

  
    
    public Boolean updateContact(Account[] conList)
  {
     // Will not update contact if method is called in TriggerContext
     if(Trigger.isExecuting)
     {
    
      contact ct=new contact();
      ct.AccountId=trigger.new[0].id;
      ct.Languages__c = 'marathi';
ct.firstName = 'Rajesh';
ct.LastName = 'kamble';
      insert(ct);
     
       
     }
     else
     {
       // update contacts
       System.debug(' $ $ updating contacts');
     }
     System.debug(' $ $ return ' + Trigger.isExecuting);
     return Trigger.isExecuting;
      }
    
}