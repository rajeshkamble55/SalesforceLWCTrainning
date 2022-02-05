trigger accountTrigger on Account (before insert,before update) {

Set<String> setName = new Set<String>();

    For(Account acc : trigger.new)
    {
        setName.add(acc.name);
    }
    
system.debug('Set'+setName);
if(setName.size() > 0 )
    {
    List<account> accLst = [select id,name from account where name in : setName];
    
    Map<String,account> mapLst =new Map<String, Account>();
    
    for(account acct : accLst)
    {
    System.debug('Map'+acct.name);
    mapLst.put(acct.name,acct);
    }
    
    
    for(account acnt : Trigger.new)
    {
    System.debug('trigger.new'+acnt.name);
    if(mapLst.containsKey(acnt.name))
    {
    acnt.name.addError('Account with the same name already exist.');
    }
    }
    
    
    }
}