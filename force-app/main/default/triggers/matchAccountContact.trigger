trigger matchAccountContact on Contact (before insert , before update) {

List<String> actLst =new List<String>();

for(contact c : Trigger.new)
{
actLst.add(c.name);
}
system.debug('actLst'+actLst);

Map<String,Id> act = new map<String,Id>();

List<account> at =  [select id,name from account where name in : actLst];

for(account aa:at)
{
act.put(aa.name,aa.id);
}


for(contact cts: Trigger.new)
{
 
if(act.containsKey(cts.name))
{
cts.accountId = act.get(cts.name);

system.debug('gere');
}
else
{
system.debug('gger');
//Account a = new account();
//a.name = cts.name;
//insert(a);
//cts.accountId = a.id;
}
}



}