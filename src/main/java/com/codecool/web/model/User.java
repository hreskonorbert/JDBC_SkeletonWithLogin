package com.codecool.web.model;

public class User {
    int id;
    String email;
    String password;

    public User(int id, String email) {
        this.id = id;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public int getId() {
        return id;
    }
}
