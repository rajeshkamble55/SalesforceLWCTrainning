trigger contactTrigg on Contact (Before Insert,Before Update)
{

Set<Id> contid = new Set<Id>();

for(contact cont : Trigger.new)
{
contid.add(cont.Accountid);
}

List<contact> ctc = [select id,name,Accountid ,isPrimary__c from contact where Accountid in : contid  and isPrimary__c =: true ];

Map<Id,contact> mapAcct = new Map<Id,contact>();

for(contact ct : ctc )
{
mapAcct.put(ct.Accountid ,ct);
}
  
  
for(contact cont : Trigger.new)
{
 if(mapAcct.containsKey(cont.Accountid) && cont.isPrimary__c == true)
 {
 cont.isPrimary__c.addError('Primary contact for this account is created already'); 
 }
}

}