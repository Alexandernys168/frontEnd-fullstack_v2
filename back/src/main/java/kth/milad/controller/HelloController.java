<<<<<<< HEAD:back/src/main/java/kth/milad/entity/HelloController.java
package kth.milad.entity;
=======
package kth.milad.demo.application;
>>>>>>> Fetching-data-to-frontend:back/src/main/java/kth/milad/entity/application/HelloController.java

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hej från Spring Boot!";
    }
}
