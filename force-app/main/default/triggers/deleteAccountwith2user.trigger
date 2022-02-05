trigger deleteAccountwith2user on Account (before delete)
 {
 
List<AggregateResult> ctLst = [SELECT AccountId, COUNT(Id) ContactCount FROM Contact where accountId in :Trigger.old  GROUP BY AccountId];

for(AggregateResult ct: ctLst )
{
System.debug('here er ' +(integer) ct.get('ContactCount'));
if((integer) ct.get('ContactCount') > =1 )
{


account act= new account();
act.id = (String)ct.get('AccountId');
System.debug('here er ' +(String)ct.get('AccountId'));

System.debug('here act.id ' +act.id);
act.addError('account can not delete as triiger');
}
}
/*

 List<Account> accList = new List<Account>();  
    Set<id> accIdSet = new Set<id>();  
    for(Account acc : Trigger.old)  
    {  
        accIdSet.add(acc.id);  
    }  

    Map<Id, Account> accts = new Map<Id, Account>([Select Id, (Select Id from contacts) from Account where id in :accIdSet]);

    for(Account acc : Trigger.old)
    {
    System.debug('accts.get(acc.id).contacts.size()'+accts.get(acc.id).contacts.size());
        if(accts.get(acc.id).contacts.size()>=1)
        {
            acc.addError('Account cannot be deleted');
            }
        }     

 
*/
   /*  for (Account acc : trigger.old)
  {
    if (String.isNotBlank(acc.Phone))
     { 
  acc.addError('You cannot delete RSK');
     }
         } */
   
 
}