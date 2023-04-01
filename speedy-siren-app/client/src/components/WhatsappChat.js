import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsappChat = () => {
    return (
        <WhatsAppWidget companyName="SpeedySiren" message="Hello!👋 What can I do for you?" phoneNumber="9004882360" />
    );
};

export default WhatsappChat;