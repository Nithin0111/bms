import Address from "./address";
import Customer from "./customer";

class BookOrder{
    orderId='';
    customer=new Customer();
    orderDate='';
    orderTotal='';
    status='';
    recipentName='';
    recieptPhone='';
    shippingAddress= new Address();
}
export default BookOrder;