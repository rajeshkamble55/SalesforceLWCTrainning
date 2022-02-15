public with sharing class AuraEnabledFunction{


@AuraEnabled(cacheable = true)
public static List<Account> getAccounts(Integer noOfRecords){

     List<Account> lstAccount;

    if(Account.SObjectType.getDescribe().isAccessible() &&  Schema.SObjectType.Account.fields.Name.isAccessible() &&   Schema.SObjectType.Account.fields.Id.isAccessible() 
    &&   Schema.SObjectType.Account.fields.Phone.isAccessible()  )
        {
   return  lstAccount =[select id,name,phone from account limit : noOfRecords];
    }
    return lstAccount;
}


}