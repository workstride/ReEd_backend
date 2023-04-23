@Entity
@Table(name = "users")
public class User {

    @Id
    private String id;

    @Column(nullable = false)
    private String UserType:Int;

    @Column(nullable = false)
    private String password;

    // getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserType() {
        return UserType;
    }

    public void setUserType(String userType) {
        UserType = userType;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}