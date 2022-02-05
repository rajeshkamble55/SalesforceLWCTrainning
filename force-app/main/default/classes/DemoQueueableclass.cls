public class DemoQueueableclass implements Queueable {
    
    public account acc;
    
    public DemoQueueableclass(account acct)
    {
        this.acc = acct;
    }
    
    public void execute(QueueableContext content)
    {
        this.acc.name = 'Rajesh kamble';
        update(acc);
    }

}