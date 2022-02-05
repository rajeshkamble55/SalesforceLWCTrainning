trigger updateAccountEmail on Contact (After insert,after update) 
{

List<contact> contc = [select id, name, Email, accountId from contact where id in: Trigger.new ];

List < Account > lstAccount = new List < Account > ();
  String allEmail = '';
  
  
  if (contc != null && contc.size() > 0) {
  
  
    for (contact AccCts: contc) 
    {
      if (AccCts.email != null && AccCts.email != '') 
      {
        allEmail = allEmail + AccCts.email + ';';

        Account act = new account();
        act.id = AccCts.accountId;
        act.AllEmail__c = allEmail;
        lstAccount.add(act);

      }
    }
  }
  if (lstAccount != null && lstAccount.size() > 0) {
    update lstAccount;
  }
}