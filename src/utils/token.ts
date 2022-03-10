import {UserTypes, privateTokenForJWT} from '../config';
import jwt from 'jsonwebtoken';

const createJwtToken = body => jwt.sign(body, privateTokenForJWT);

exports.createAnonymousJwtToken = () =>
  createJwtToken({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": [UserTypes.user],
      "x-hasura-default-role": UserTypes.user
    }
  });