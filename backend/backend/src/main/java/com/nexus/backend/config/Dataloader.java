// package com.nexus.backend.config;

// public class Dataloader {

// }
package com.nexus.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCrypt;

import com.nexus.backend.model.User;
import com.nexus.backend.model.Admin;
import com.nexus.backend.repository.UserRepository;
import com.nexus.backend.repository.AdminRepository;

@Configuration
public class Dataloader {

    @Bean
    CommandLineRunner initData(UserRepository userRepo, AdminRepository adminRepo) {
        return args -> {
            if (userRepo.findById("admin@nexus.com").isEmpty()) {
                User user = new User();
                user.setCollegeId("COL123");
                user.setEmailId("admin@nexus.com");
                user.setPassword(BCrypt.hashpw("admin123", BCrypt.gensalt()));
                user.setRole("ADMIN");
                user = userRepo.save(user);

                Admin admin = new Admin();
                admin.setId(user.getId());
                admin.setName("Super Admin");
                adminRepo.save(admin);
            }
        };
    }
}

