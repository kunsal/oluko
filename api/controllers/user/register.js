/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  friendlyName: 'User registration controller',

  description:
    'Register user',

  inputs: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    }
  },

  exits: {
    success: {
      statusCode: 200,
      description: 'User registration successful'
    },
    invalidRequest: {
      statusCode: 400,
      description: 'The provided data was invalid.'
    },
    emailExists: {
      statusCode: 409,
      description: 'Email has already been taken'
    },
    errorRequest: {
      statusCode: 500,
      description: 'On the request there is an error.'
    }
  },
  fn: async ({email}) => {
    const userExists = await User.findOne({email});
    if (userExists) {
      throw {
        emailExists: {
          success: false,
          message: 'Email exists'
        }
      };
    }
  }
};

