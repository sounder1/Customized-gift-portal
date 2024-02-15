package com.example.backend.repository;

import com.example.backend.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contact, Long> {
    // Define custom query methods if needed
}
