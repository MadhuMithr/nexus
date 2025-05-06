package com.nexus.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexus.backend.model.Admin;
import com.nexus.backend.model.User;
import com.nexus.backend.repository.AdminRepository;
import com.nexus.backend.repository.UserRepository;
import com.nexus.backend.request.LoginRequest;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    public Admin authenticateAdmin(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByCollegeIdAndEmailId(request.getCollegeId(), request.getEmailId());

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            if (user.getPassword().equals(request.getPassword()) && "ADMIN".equals(user.getRole())) {
                return adminRepository.findByUserId(user.getId())
                        .orElseThrow(() -> new RuntimeException("Admin profile not found"));
            }
        }

        throw new RuntimeException("Invalid credentials");
    }
}

