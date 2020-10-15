package org.ruizhu.spars.service;

import org.ruizhu.spars.controller.dto.UserRegistrationDto;
import org.ruizhu.spars.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User save(UserRegistrationDto registrationDto);
}
