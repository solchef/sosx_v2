const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

async function getPosts(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('posts')
            .find({ reward_status: false })
            // .sort({ published: -1 })
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function addPost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        db.collection('posts').createIndex({ "account": 1 }, { unique: false });
        // let count = await posts.count({userId, createdAt: {$gte: startOfDay}});

        if (db.collection('posts').find({ "email_address": { $exists: true, $not: null } })) {
            await db.collection('posts').insertOne(JSON.parse(req.body));
            // return a message
            return res.json({
                message: 'Post added successfully',
                success: true,
            });
        }
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function updatePost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // update the published status of the post
        await db.collection('posts').updateOne({
            address: req.body,
        }, { $set: { reward_status: true } });
        // return a message
        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function deletePost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        await db.collection('posts').deleteOne({
            _id: new ObjectId(req.body),
        });

        // returning a message
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET':
            {
                return getPosts(req, res);
            }

        case 'POST':
            {
                return addPost(req, res);
            }

        case 'PUT':
            {
                return updatePost(req, res);
            }

        case 'DELETE':
            {
                return deletePost(req, res);
            }
    }
}