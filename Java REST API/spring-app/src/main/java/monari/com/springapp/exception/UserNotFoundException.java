package monari.com.springapp.exception;


public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(int id){
        super("User not Found");
    }
}
