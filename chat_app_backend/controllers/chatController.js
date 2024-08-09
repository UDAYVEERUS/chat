const Message = require('../models/Messsage');
const User = require('../models/Messsage');

exports.sendMessage = async (req, res) => {
    const { receiverId, message } = req.body;

    try {
        const newMessage = new Message({
            sender: req.user.id,
            receiver: receiverId,
            message,
        });

        await newMessage.save();

        res.json(newMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [{ sender: req.user.id }, { receiver: req.user.id }],
        }).sort({ date: -1 });

        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
