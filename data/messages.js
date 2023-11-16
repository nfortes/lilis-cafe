import {messages} from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';
import validation from '../validation.js';

const addMessage =  async (subject, body, email, tags) => {
    let newMessage = validateMessage (
        subject,
        body,
        email,
        tags
    )
}