public with sharing class AuraEnabledFunction{


@AuraEnabled(cacheable = true)
public static List<Account> getAccounts(Integer noOfRecords){
    return [select id,name,phone from account limit : noOfRecords];
    
}


}