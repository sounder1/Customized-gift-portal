package com.example.backend.service;

import com.example.backend.entity.Contact;
import com.example.backend.repository.ContactRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepo contactRepo;

    public ContactService(ContactRepo contactRepo) {
        this.contactRepo = contactRepo;
    }

    public List<Contact> getAllContacts() {
        return contactRepo.findAll();
    }

    public Contact saveContact(Contact contact) {
        return contactRepo.save(contact);
    }

    // Other methods as needed
}
