import { smsConfig } from '@/config/sms';
import axios from 'axios';

export const sendSMS = async (phoneNumber: string, message: string) => {
  await axios.post(smsConfig.provider, {
    apiKey: smsConfig.apiKey,
    to: phoneNumber,
    message,
  });
};
