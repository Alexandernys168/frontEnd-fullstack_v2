package kth.milad.ViewModels;

import jakarta.persistence.Column;
import lombok.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class UserVm {
    private int id;
    private String name;
    private String userType;
    private String email;
    private String password;
}
