import Book from "./book";
import BookOrder from "./bookorder";

class OrderDetails{
    orderDetailsId='';
    book = new Book();
    bookOrder= new BookOrder();
    quantity='';
    subtotal='';
}
export default OrderDetails;