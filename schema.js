import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String,
        lastName: String,
        gender: Gender,
        age: Int,
        language: String,
        contacts: [Contact],
        emails: [Email]!
    }


    type Contact {
        firstName: String,
        lastName: String
    }


    enum Gender {
        MALE,
        FEMALE
    }


    type Email {
        email: String
    }

    type Query {
        getFriend(id: ID): Friend,
        getAllFriends: [Friend]
    }



    input FriendInput{
        id: ID,
        firstName: String,
        lastName: String,
        gender: Gender,
        age: Int
        contacts: [ContactInput],
        language: String
    }


    input ContactInput{
        firstName: String,
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

`)

export default schema;
