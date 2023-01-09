package JustResting.restfulman.model;

import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_practice")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String name;
    @Column(name = "username", unique = true)
    private String nickname;
    private Integer age;
    private String password;

    public User(String name, String username, Integer age, String password){
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.password = password;
    }

}
