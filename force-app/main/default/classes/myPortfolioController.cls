public with sharing class myPortfolioController {

    public boolean tab1{get;set;}
    public boolean tab2{get;set;}
    public boolean tab3{get;set;}
    public boolean tab4{get;set;}
    public boolean tab5{get;set;}
     public boolean tab6{get;set;}
    public transient string base64pdf{get;set;}
  public myPortfolioController(){
        tab1 = true;
        
    } 

    public void tabAction1() 
    {
       tab1 = true;tab2 = false;tab3=false;tab4 = false;tab5=false;tab6=false;
    }
    public void tabAction2()
    {
         tab1 = false;tab2 = true;tab3=false;tab4 = false;tab5=false;tab6=false;
    }
 public void tabAction3() 
    {
       tab1 = false;tab2 = false;tab3=true;tab4 = false;tab5=false;tab6=false;
    }
    public void tabAction4()
    {
         tab1 = false;tab2 = false;tab3=false;tab4 = true;tab5=false;tab6=false;
    }
    public void tabAction5()
    {
         tab1 = false;tab2 = false;tab3=false;tab4 = false;tab5=true;tab6=false;
        }
     public void tabAction6()
    {
         tab1 = false;tab2 = false;tab3=false;tab4 = false;tab5=false;
        tab6=true;
        }
  }