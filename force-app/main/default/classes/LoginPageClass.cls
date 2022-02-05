public class LoginPageClass {
    public class userDetails{
        public String name{get;set;}
        public Integer contact{get;set;}
        public String address{get;set;}
    }
    public List<userDetails> uDetils{get;set;}
    
    LoginPageClass()
    {
      uDetils = new List<userDetails>();   
    }
    
    public static void display()
    {
        System.debug('Here we arte');
    }

   
    @auraEnabled
    public static void addUser( ){
      
    }
  
}