package com.nexus.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nexus.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByCollegeIdAndEmailId(String collegeId, String emailId);
}