package com.nexus.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nexus.backend.model.Student;

public interface Studentrepo extends MongoRepository<Student,Integer> {

}
