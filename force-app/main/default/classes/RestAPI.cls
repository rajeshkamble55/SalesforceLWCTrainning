@RestResource(urlmapping ='/MyLosService')
global class RestAPI //must be global
{
@HttpPost
    global static String doPost(String name)//Must be declear as static and global
    {
        Account acc = new Account();
        acc.name = name;
        //String s = 'Rajesh Kamble';
        insert(acc);
        return acc.id;
    }

    
    
    
}