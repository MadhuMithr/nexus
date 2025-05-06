package com.nexus.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.nexus.backend.model.Admin;
import com.nexus.backend.model.User;
import com.nexus.backend.repository.AdminRepository;
import com.nexus.backend.repository.UserRepository;
//asdfghjkoredfghhgv
@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
CommandLineRunner init(AdminRepository adminRepo, UserRepository userRepo) {
    return args -> {
        User user = new User();
        user.setEmailId("admin@college.edu");
        user.setPassword("admin123");
        user.setCollegeId("C001");
        user.setRole("ADMIN");

        userRepo.save(user);

        Admin admin = new Admin();
        admin.setName("Principal");
        admin.setUser(user);

        adminRepo.save(admin);
		System.out.println("Running CommandLineRunner...");

    };
}

}
