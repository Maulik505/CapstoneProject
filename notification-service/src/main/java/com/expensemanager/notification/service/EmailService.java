package com.expensemanager.notification.service;

import com.expensemanager.notification.domain.NotificationType;
import com.expensemanager.notification.domain.Recipient;

import javax.mail.MessagingException;
import java.io.IOException;

public interface EmailService {

	void send(NotificationType type, Recipient recipient, String attachment) throws MessagingException, IOException;

}
