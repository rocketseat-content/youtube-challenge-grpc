/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string|null} [id] User id
     * @property {string|null} [email] User email
     * @property {string|null} [username] User username
     * @property {string|null} [password] User password
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User id.
     * @member {string} id
     * @memberof User
     * @instance
     */
    User.prototype.id = "";

    /**
     * User email.
     * @member {string} email
     * @memberof User
     * @instance
     */
    User.prototype.email = "";

    /**
     * User username.
     * @member {string} username
     * @memberof User
     * @instance
     */
    User.prototype.username = "";

    /**
     * User password.
     * @member {string} password
     * @memberof User
     * @instance
     */
    User.prototype.password = "";

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.email != null && message.hasOwnProperty("email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.username != null && message.hasOwnProperty("username"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
        if (message.password != null && message.hasOwnProperty("password"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.email = reader.string();
                break;
            case 3:
                message.username = reader.string();
                break;
            case 4:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.id != null)
            message.id = String(object.id);
        if (object.email != null)
            message.email = String(object.email);
        if (object.username != null)
            message.username = String(object.username);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.email = "";
            object.username = "";
            object.password = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return User;
})();

$root.GetUserByIdRequest = (function() {

    /**
     * Properties of a GetUserByIdRequest.
     * @exports IGetUserByIdRequest
     * @interface IGetUserByIdRequest
     * @property {string|null} [id] GetUserByIdRequest id
     */

    /**
     * Constructs a new GetUserByIdRequest.
     * @exports GetUserByIdRequest
     * @classdesc Represents a GetUserByIdRequest.
     * @implements IGetUserByIdRequest
     * @constructor
     * @param {IGetUserByIdRequest=} [properties] Properties to set
     */
    function GetUserByIdRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetUserByIdRequest id.
     * @member {string} id
     * @memberof GetUserByIdRequest
     * @instance
     */
    GetUserByIdRequest.prototype.id = "";

    /**
     * Creates a new GetUserByIdRequest instance using the specified properties.
     * @function create
     * @memberof GetUserByIdRequest
     * @static
     * @param {IGetUserByIdRequest=} [properties] Properties to set
     * @returns {GetUserByIdRequest} GetUserByIdRequest instance
     */
    GetUserByIdRequest.create = function create(properties) {
        return new GetUserByIdRequest(properties);
    };

    /**
     * Encodes the specified GetUserByIdRequest message. Does not implicitly {@link GetUserByIdRequest.verify|verify} messages.
     * @function encode
     * @memberof GetUserByIdRequest
     * @static
     * @param {IGetUserByIdRequest} message GetUserByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserByIdRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified GetUserByIdRequest message, length delimited. Does not implicitly {@link GetUserByIdRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetUserByIdRequest
     * @static
     * @param {IGetUserByIdRequest} message GetUserByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetUserByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetUserByIdRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetUserByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetUserByIdRequest} GetUserByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserByIdRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetUserByIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetUserByIdRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetUserByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetUserByIdRequest} GetUserByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetUserByIdRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetUserByIdRequest message.
     * @function verify
     * @memberof GetUserByIdRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetUserByIdRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a GetUserByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetUserByIdRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetUserByIdRequest} GetUserByIdRequest
     */
    GetUserByIdRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetUserByIdRequest)
            return object;
        var message = new $root.GetUserByIdRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a GetUserByIdRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetUserByIdRequest
     * @static
     * @param {GetUserByIdRequest} message GetUserByIdRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetUserByIdRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GetUserByIdRequest to JSON.
     * @function toJSON
     * @memberof GetUserByIdRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetUserByIdRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetUserByIdRequest;
})();

$root.RegisterUserRequest = (function() {

    /**
     * Properties of a RegisterUserRequest.
     * @exports IRegisterUserRequest
     * @interface IRegisterUserRequest
     * @property {IUser|null} [user] RegisterUserRequest user
     */

    /**
     * Constructs a new RegisterUserRequest.
     * @exports RegisterUserRequest
     * @classdesc Represents a RegisterUserRequest.
     * @implements IRegisterUserRequest
     * @constructor
     * @param {IRegisterUserRequest=} [properties] Properties to set
     */
    function RegisterUserRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RegisterUserRequest user.
     * @member {IUser|null|undefined} user
     * @memberof RegisterUserRequest
     * @instance
     */
    RegisterUserRequest.prototype.user = null;

    /**
     * Creates a new RegisterUserRequest instance using the specified properties.
     * @function create
     * @memberof RegisterUserRequest
     * @static
     * @param {IRegisterUserRequest=} [properties] Properties to set
     * @returns {RegisterUserRequest} RegisterUserRequest instance
     */
    RegisterUserRequest.create = function create(properties) {
        return new RegisterUserRequest(properties);
    };

    /**
     * Encodes the specified RegisterUserRequest message. Does not implicitly {@link RegisterUserRequest.verify|verify} messages.
     * @function encode
     * @memberof RegisterUserRequest
     * @static
     * @param {IRegisterUserRequest} message RegisterUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RegisterUserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && message.hasOwnProperty("user"))
            $root.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link RegisterUserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RegisterUserRequest
     * @static
     * @param {IRegisterUserRequest} message RegisterUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RegisterUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RegisterUserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RegisterUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RegisterUserRequest} RegisterUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RegisterUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegisterUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = $root.User.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RegisterUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RegisterUserRequest} RegisterUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RegisterUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RegisterUserRequest message.
     * @function verify
     * @memberof RegisterUserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RegisterUserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        return null;
    };

    /**
     * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RegisterUserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RegisterUserRequest} RegisterUserRequest
     */
    RegisterUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RegisterUserRequest)
            return object;
        var message = new $root.RegisterUserRequest();
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".RegisterUserRequest.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        return message;
    };

    /**
     * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RegisterUserRequest
     * @static
     * @param {RegisterUserRequest} message RegisterUserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RegisterUserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.user = null;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        return object;
    };

    /**
     * Converts this RegisterUserRequest to JSON.
     * @function toJSON
     * @memberof RegisterUserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RegisterUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RegisterUserRequest;
})();

$root.AuthenticationRequest = (function() {

    /**
     * Properties of an AuthenticationRequest.
     * @exports IAuthenticationRequest
     * @interface IAuthenticationRequest
     * @property {string|null} [token] AuthenticationRequest token
     */

    /**
     * Constructs a new AuthenticationRequest.
     * @exports AuthenticationRequest
     * @classdesc Represents an AuthenticationRequest.
     * @implements IAuthenticationRequest
     * @constructor
     * @param {IAuthenticationRequest=} [properties] Properties to set
     */
    function AuthenticationRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthenticationRequest token.
     * @member {string} token
     * @memberof AuthenticationRequest
     * @instance
     */
    AuthenticationRequest.prototype.token = "";

    /**
     * Creates a new AuthenticationRequest instance using the specified properties.
     * @function create
     * @memberof AuthenticationRequest
     * @static
     * @param {IAuthenticationRequest=} [properties] Properties to set
     * @returns {AuthenticationRequest} AuthenticationRequest instance
     */
    AuthenticationRequest.create = function create(properties) {
        return new AuthenticationRequest(properties);
    };

    /**
     * Encodes the specified AuthenticationRequest message. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthenticationRequest
     * @static
     * @param {IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthenticationRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuthenticationRequest
     * @static
     * @param {IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthenticationRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthenticationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthenticationRequest} AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthenticationRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthenticationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuthenticationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuthenticationRequest} AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthenticationRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AuthenticationRequest message.
     * @function verify
     * @memberof AuthenticationRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthenticationRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuthenticationRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuthenticationRequest} AuthenticationRequest
     */
    AuthenticationRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.AuthenticationRequest)
            return object;
        var message = new $root.AuthenticationRequest();
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuthenticationRequest
     * @static
     * @param {AuthenticationRequest} message AuthenticationRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthenticationRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.token = "";
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this AuthenticationRequest to JSON.
     * @function toJSON
     * @memberof AuthenticationRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthenticationRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AuthenticationRequest;
})();

$root.UserResponse = (function() {

    /**
     * Properties of a UserResponse.
     * @exports IUserResponse
     * @interface IUserResponse
     * @property {IUser|null} [user] UserResponse user
     * @property {string|null} [error] UserResponse error
     */

    /**
     * Constructs a new UserResponse.
     * @exports UserResponse
     * @classdesc Represents a UserResponse.
     * @implements IUserResponse
     * @constructor
     * @param {IUserResponse=} [properties] Properties to set
     */
    function UserResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserResponse user.
     * @member {IUser|null|undefined} user
     * @memberof UserResponse
     * @instance
     */
    UserResponse.prototype.user = null;

    /**
     * UserResponse error.
     * @member {string} error
     * @memberof UserResponse
     * @instance
     */
    UserResponse.prototype.error = "";

    /**
     * Creates a new UserResponse instance using the specified properties.
     * @function create
     * @memberof UserResponse
     * @static
     * @param {IUserResponse=} [properties] Properties to set
     * @returns {UserResponse} UserResponse instance
     */
    UserResponse.create = function create(properties) {
        return new UserResponse(properties);
    };

    /**
     * Encodes the specified UserResponse message. Does not implicitly {@link UserResponse.verify|verify} messages.
     * @function encode
     * @memberof UserResponse
     * @static
     * @param {IUserResponse} message UserResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && message.hasOwnProperty("user"))
            $root.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link UserResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserResponse
     * @static
     * @param {IUserResponse} message UserResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserResponse} UserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = $root.User.decode(reader, reader.uint32());
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserResponse} UserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserResponse message.
     * @function verify
     * @memberof UserResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserResponse} UserResponse
     */
    UserResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UserResponse)
            return object;
        var message = new $root.UserResponse();
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".UserResponse.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserResponse
     * @static
     * @param {UserResponse} message UserResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.user = null;
            object.error = "";
        }
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this UserResponse to JSON.
     * @function toJSON
     * @memberof UserResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserResponse;
})();

$root.LoginUserRequest = (function() {

    /**
     * Properties of a LoginUserRequest.
     * @exports ILoginUserRequest
     * @interface ILoginUserRequest
     * @property {IUser|null} [user] LoginUserRequest user
     */

    /**
     * Constructs a new LoginUserRequest.
     * @exports LoginUserRequest
     * @classdesc Represents a LoginUserRequest.
     * @implements ILoginUserRequest
     * @constructor
     * @param {ILoginUserRequest=} [properties] Properties to set
     */
    function LoginUserRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginUserRequest user.
     * @member {IUser|null|undefined} user
     * @memberof LoginUserRequest
     * @instance
     */
    LoginUserRequest.prototype.user = null;

    /**
     * Creates a new LoginUserRequest instance using the specified properties.
     * @function create
     * @memberof LoginUserRequest
     * @static
     * @param {ILoginUserRequest=} [properties] Properties to set
     * @returns {LoginUserRequest} LoginUserRequest instance
     */
    LoginUserRequest.create = function create(properties) {
        return new LoginUserRequest(properties);
    };

    /**
     * Encodes the specified LoginUserRequest message. Does not implicitly {@link LoginUserRequest.verify|verify} messages.
     * @function encode
     * @memberof LoginUserRequest
     * @static
     * @param {ILoginUserRequest} message LoginUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginUserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && message.hasOwnProperty("user"))
            $root.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link LoginUserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginUserRequest
     * @static
     * @param {ILoginUserRequest} message LoginUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginUserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LoginUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginUserRequest} LoginUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = $root.User.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginUserRequest} LoginUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginUserRequest message.
     * @function verify
     * @memberof LoginUserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginUserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.User.verify(message.user);
            if (error)
                return "user." + error;
        }
        return null;
    };

    /**
     * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginUserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginUserRequest} LoginUserRequest
     */
    LoginUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginUserRequest)
            return object;
        var message = new $root.LoginUserRequest();
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".LoginUserRequest.user: object expected");
            message.user = $root.User.fromObject(object.user);
        }
        return message;
    };

    /**
     * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginUserRequest
     * @static
     * @param {LoginUserRequest} message LoginUserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginUserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.user = null;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.User.toObject(message.user, options);
        return object;
    };

    /**
     * Converts this LoginUserRequest to JSON.
     * @function toJSON
     * @memberof LoginUserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginUserRequest;
})();

$root.LoginResponse = (function() {

    /**
     * Properties of a LoginResponse.
     * @exports ILoginResponse
     * @interface ILoginResponse
     * @property {string|null} [token] LoginResponse token
     * @property {string|null} [error] LoginResponse error
     */

    /**
     * Constructs a new LoginResponse.
     * @exports LoginResponse
     * @classdesc Represents a LoginResponse.
     * @implements ILoginResponse
     * @constructor
     * @param {ILoginResponse=} [properties] Properties to set
     */
    function LoginResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginResponse token.
     * @member {string} token
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.token = "";

    /**
     * LoginResponse error.
     * @member {string} error
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.error = "";

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @function create
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse=} [properties] Properties to set
     * @returns {LoginResponse} LoginResponse instance
     */
    LoginResponse.create = function create(properties) {
        return new LoginResponse(properties);
    };

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encode
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && message.hasOwnProperty("token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginResponse message.
     * @function verify
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginResponse} LoginResponse
     */
    LoginResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginResponse)
            return object;
        var message = new $root.LoginResponse();
        if (object.token != null)
            message.token = String(object.token);
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginResponse
     * @static
     * @param {LoginResponse} message LoginResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.token = "";
            object.error = "";
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this LoginResponse to JSON.
     * @function toJSON
     * @memberof LoginResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginResponse;
})();

$root.UserService = (function() {

    /**
     * Constructs a new UserService service.
     * @exports UserService
     * @classdesc Represents a UserService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function UserService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

    /**
     * Creates new UserService service using the specified rpc implementation.
     * @function create
     * @memberof UserService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
     */
    UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link UserService#getUserById}.
     * @memberof UserService
     * @typedef GetUserByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UserResponse} [response] UserResponse
     */

    /**
     * Calls GetUserById.
     * @function getUserById
     * @memberof UserService
     * @instance
     * @param {IGetUserByIdRequest} request GetUserByIdRequest message or plain object
     * @param {UserService.GetUserByIdCallback} callback Node-style callback called with the error, if any, and UserResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(UserService.prototype.getUserById = function getUserById(request, callback) {
        return this.rpcCall(getUserById, $root.GetUserByIdRequest, $root.UserResponse, request, callback);
    }, "name", { value: "GetUserById" });

    /**
     * Calls GetUserById.
     * @function getUserById
     * @memberof UserService
     * @instance
     * @param {IGetUserByIdRequest} request GetUserByIdRequest message or plain object
     * @returns {Promise<UserResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link UserService#registerUser}.
     * @memberof UserService
     * @typedef RegisterUserCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UserResponse} [response] UserResponse
     */

    /**
     * Calls RegisterUser.
     * @function registerUser
     * @memberof UserService
     * @instance
     * @param {IRegisterUserRequest} request RegisterUserRequest message or plain object
     * @param {UserService.RegisterUserCallback} callback Node-style callback called with the error, if any, and UserResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(UserService.prototype.registerUser = function registerUser(request, callback) {
        return this.rpcCall(registerUser, $root.RegisterUserRequest, $root.UserResponse, request, callback);
    }, "name", { value: "RegisterUser" });

    /**
     * Calls RegisterUser.
     * @function registerUser
     * @memberof UserService
     * @instance
     * @param {IRegisterUserRequest} request RegisterUserRequest message or plain object
     * @returns {Promise<UserResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link UserService#authenticate}.
     * @memberof UserService
     * @typedef AuthenticateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UserResponse} [response] UserResponse
     */

    /**
     * Calls Authenticate.
     * @function authenticate
     * @memberof UserService
     * @instance
     * @param {IAuthenticationRequest} request AuthenticationRequest message or plain object
     * @param {UserService.AuthenticateCallback} callback Node-style callback called with the error, if any, and UserResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(UserService.prototype.authenticate = function authenticate(request, callback) {
        return this.rpcCall(authenticate, $root.AuthenticationRequest, $root.UserResponse, request, callback);
    }, "name", { value: "Authenticate" });

    /**
     * Calls Authenticate.
     * @function authenticate
     * @memberof UserService
     * @instance
     * @param {IAuthenticationRequest} request AuthenticationRequest message or plain object
     * @returns {Promise<UserResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link UserService#loginUser}.
     * @memberof UserService
     * @typedef LoginUserCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {LoginResponse} [response] LoginResponse
     */

    /**
     * Calls LoginUser.
     * @function loginUser
     * @memberof UserService
     * @instance
     * @param {ILoginUserRequest} request LoginUserRequest message or plain object
     * @param {UserService.LoginUserCallback} callback Node-style callback called with the error, if any, and LoginResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(UserService.prototype.loginUser = function loginUser(request, callback) {
        return this.rpcCall(loginUser, $root.LoginUserRequest, $root.LoginResponse, request, callback);
    }, "name", { value: "LoginUser" });

    /**
     * Calls LoginUser.
     * @function loginUser
     * @memberof UserService
     * @instance
     * @param {ILoginUserRequest} request LoginUserRequest message or plain object
     * @returns {Promise<LoginResponse>} Promise
     * @variation 2
     */

    return UserService;
})();

$root.Purchase = (function() {

    /**
     * Properties of a Purchase.
     * @exports IPurchase
     * @interface IPurchase
     * @property {string|null} [id] Purchase id
     * @property {string|null} [userId] Purchase userId
     * @property {string|null} [title] Purchase title
     * @property {number|null} [value] Purchase value
     */

    /**
     * Constructs a new Purchase.
     * @exports Purchase
     * @classdesc Represents a Purchase.
     * @implements IPurchase
     * @constructor
     * @param {IPurchase=} [properties] Properties to set
     */
    function Purchase(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Purchase id.
     * @member {string} id
     * @memberof Purchase
     * @instance
     */
    Purchase.prototype.id = "";

    /**
     * Purchase userId.
     * @member {string} userId
     * @memberof Purchase
     * @instance
     */
    Purchase.prototype.userId = "";

    /**
     * Purchase title.
     * @member {string} title
     * @memberof Purchase
     * @instance
     */
    Purchase.prototype.title = "";

    /**
     * Purchase value.
     * @member {number} value
     * @memberof Purchase
     * @instance
     */
    Purchase.prototype.value = 0;

    /**
     * Creates a new Purchase instance using the specified properties.
     * @function create
     * @memberof Purchase
     * @static
     * @param {IPurchase=} [properties] Properties to set
     * @returns {Purchase} Purchase instance
     */
    Purchase.create = function create(properties) {
        return new Purchase(properties);
    };

    /**
     * Encodes the specified Purchase message. Does not implicitly {@link Purchase.verify|verify} messages.
     * @function encode
     * @memberof Purchase
     * @static
     * @param {IPurchase} message Purchase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Purchase.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.title != null && message.hasOwnProperty("title"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.value);
        return writer;
    };

    /**
     * Encodes the specified Purchase message, length delimited. Does not implicitly {@link Purchase.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Purchase
     * @static
     * @param {IPurchase} message Purchase message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Purchase.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Purchase message from the specified reader or buffer.
     * @function decode
     * @memberof Purchase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Purchase} Purchase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Purchase.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Purchase();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.userId = reader.string();
                break;
            case 3:
                message.title = reader.string();
                break;
            case 4:
                message.value = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Purchase message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Purchase
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Purchase} Purchase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Purchase.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Purchase message.
     * @function verify
     * @memberof Purchase
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Purchase.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        return null;
    };

    /**
     * Creates a Purchase message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Purchase
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Purchase} Purchase
     */
    Purchase.fromObject = function fromObject(object) {
        if (object instanceof $root.Purchase)
            return object;
        var message = new $root.Purchase();
        if (object.id != null)
            message.id = String(object.id);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.title != null)
            message.title = String(object.title);
        if (object.value != null)
            message.value = Number(object.value);
        return message;
    };

    /**
     * Creates a plain object from a Purchase message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Purchase
     * @static
     * @param {Purchase} message Purchase
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Purchase.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.userId = "";
            object.title = "";
            object.value = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        return object;
    };

    /**
     * Converts this Purchase to JSON.
     * @function toJSON
     * @memberof Purchase
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Purchase.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Purchase;
})();

$root.GetPurchaseByIdRequest = (function() {

    /**
     * Properties of a GetPurchaseByIdRequest.
     * @exports IGetPurchaseByIdRequest
     * @interface IGetPurchaseByIdRequest
     * @property {string|null} [id] GetPurchaseByIdRequest id
     */

    /**
     * Constructs a new GetPurchaseByIdRequest.
     * @exports GetPurchaseByIdRequest
     * @classdesc Represents a GetPurchaseByIdRequest.
     * @implements IGetPurchaseByIdRequest
     * @constructor
     * @param {IGetPurchaseByIdRequest=} [properties] Properties to set
     */
    function GetPurchaseByIdRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetPurchaseByIdRequest id.
     * @member {string} id
     * @memberof GetPurchaseByIdRequest
     * @instance
     */
    GetPurchaseByIdRequest.prototype.id = "";

    /**
     * Creates a new GetPurchaseByIdRequest instance using the specified properties.
     * @function create
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {IGetPurchaseByIdRequest=} [properties] Properties to set
     * @returns {GetPurchaseByIdRequest} GetPurchaseByIdRequest instance
     */
    GetPurchaseByIdRequest.create = function create(properties) {
        return new GetPurchaseByIdRequest(properties);
    };

    /**
     * Encodes the specified GetPurchaseByIdRequest message. Does not implicitly {@link GetPurchaseByIdRequest.verify|verify} messages.
     * @function encode
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {IGetPurchaseByIdRequest} message GetPurchaseByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPurchaseByIdRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified GetPurchaseByIdRequest message, length delimited. Does not implicitly {@link GetPurchaseByIdRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {IGetPurchaseByIdRequest} message GetPurchaseByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetPurchaseByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetPurchaseByIdRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetPurchaseByIdRequest} GetPurchaseByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPurchaseByIdRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetPurchaseByIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetPurchaseByIdRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetPurchaseByIdRequest} GetPurchaseByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetPurchaseByIdRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetPurchaseByIdRequest message.
     * @function verify
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetPurchaseByIdRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a GetPurchaseByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetPurchaseByIdRequest} GetPurchaseByIdRequest
     */
    GetPurchaseByIdRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetPurchaseByIdRequest)
            return object;
        var message = new $root.GetPurchaseByIdRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a GetPurchaseByIdRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetPurchaseByIdRequest
     * @static
     * @param {GetPurchaseByIdRequest} message GetPurchaseByIdRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetPurchaseByIdRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GetPurchaseByIdRequest to JSON.
     * @function toJSON
     * @memberof GetPurchaseByIdRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetPurchaseByIdRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetPurchaseByIdRequest;
})();

$root.HandlePurchaseRequest = (function() {

    /**
     * Properties of a HandlePurchaseRequest.
     * @exports IHandlePurchaseRequest
     * @interface IHandlePurchaseRequest
     * @property {IPurchase|null} [purchase] HandlePurchaseRequest purchase
     */

    /**
     * Constructs a new HandlePurchaseRequest.
     * @exports HandlePurchaseRequest
     * @classdesc Represents a HandlePurchaseRequest.
     * @implements IHandlePurchaseRequest
     * @constructor
     * @param {IHandlePurchaseRequest=} [properties] Properties to set
     */
    function HandlePurchaseRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandlePurchaseRequest purchase.
     * @member {IPurchase|null|undefined} purchase
     * @memberof HandlePurchaseRequest
     * @instance
     */
    HandlePurchaseRequest.prototype.purchase = null;

    /**
     * Creates a new HandlePurchaseRequest instance using the specified properties.
     * @function create
     * @memberof HandlePurchaseRequest
     * @static
     * @param {IHandlePurchaseRequest=} [properties] Properties to set
     * @returns {HandlePurchaseRequest} HandlePurchaseRequest instance
     */
    HandlePurchaseRequest.create = function create(properties) {
        return new HandlePurchaseRequest(properties);
    };

    /**
     * Encodes the specified HandlePurchaseRequest message. Does not implicitly {@link HandlePurchaseRequest.verify|verify} messages.
     * @function encode
     * @memberof HandlePurchaseRequest
     * @static
     * @param {IHandlePurchaseRequest} message HandlePurchaseRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandlePurchaseRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.purchase != null && message.hasOwnProperty("purchase"))
            $root.Purchase.encode(message.purchase, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified HandlePurchaseRequest message, length delimited. Does not implicitly {@link HandlePurchaseRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandlePurchaseRequest
     * @static
     * @param {IHandlePurchaseRequest} message HandlePurchaseRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandlePurchaseRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandlePurchaseRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HandlePurchaseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandlePurchaseRequest} HandlePurchaseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandlePurchaseRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandlePurchaseRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.purchase = $root.Purchase.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HandlePurchaseRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandlePurchaseRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandlePurchaseRequest} HandlePurchaseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandlePurchaseRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandlePurchaseRequest message.
     * @function verify
     * @memberof HandlePurchaseRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandlePurchaseRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.purchase != null && message.hasOwnProperty("purchase")) {
            var error = $root.Purchase.verify(message.purchase);
            if (error)
                return "purchase." + error;
        }
        return null;
    };

    /**
     * Creates a HandlePurchaseRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HandlePurchaseRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HandlePurchaseRequest} HandlePurchaseRequest
     */
    HandlePurchaseRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HandlePurchaseRequest)
            return object;
        var message = new $root.HandlePurchaseRequest();
        if (object.purchase != null) {
            if (typeof object.purchase !== "object")
                throw TypeError(".HandlePurchaseRequest.purchase: object expected");
            message.purchase = $root.Purchase.fromObject(object.purchase);
        }
        return message;
    };

    /**
     * Creates a plain object from a HandlePurchaseRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HandlePurchaseRequest
     * @static
     * @param {HandlePurchaseRequest} message HandlePurchaseRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HandlePurchaseRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.purchase = null;
        if (message.purchase != null && message.hasOwnProperty("purchase"))
            object.purchase = $root.Purchase.toObject(message.purchase, options);
        return object;
    };

    /**
     * Converts this HandlePurchaseRequest to JSON.
     * @function toJSON
     * @memberof HandlePurchaseRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HandlePurchaseRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HandlePurchaseRequest;
})();

$root.PurchaseResponse = (function() {

    /**
     * Properties of a PurchaseResponse.
     * @exports IPurchaseResponse
     * @interface IPurchaseResponse
     * @property {IPurchase|null} [purchase] PurchaseResponse purchase
     * @property {string|null} [error] PurchaseResponse error
     */

    /**
     * Constructs a new PurchaseResponse.
     * @exports PurchaseResponse
     * @classdesc Represents a PurchaseResponse.
     * @implements IPurchaseResponse
     * @constructor
     * @param {IPurchaseResponse=} [properties] Properties to set
     */
    function PurchaseResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PurchaseResponse purchase.
     * @member {IPurchase|null|undefined} purchase
     * @memberof PurchaseResponse
     * @instance
     */
    PurchaseResponse.prototype.purchase = null;

    /**
     * PurchaseResponse error.
     * @member {string} error
     * @memberof PurchaseResponse
     * @instance
     */
    PurchaseResponse.prototype.error = "";

    /**
     * Creates a new PurchaseResponse instance using the specified properties.
     * @function create
     * @memberof PurchaseResponse
     * @static
     * @param {IPurchaseResponse=} [properties] Properties to set
     * @returns {PurchaseResponse} PurchaseResponse instance
     */
    PurchaseResponse.create = function create(properties) {
        return new PurchaseResponse(properties);
    };

    /**
     * Encodes the specified PurchaseResponse message. Does not implicitly {@link PurchaseResponse.verify|verify} messages.
     * @function encode
     * @memberof PurchaseResponse
     * @static
     * @param {IPurchaseResponse} message PurchaseResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PurchaseResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.purchase != null && message.hasOwnProperty("purchase"))
            $root.Purchase.encode(message.purchase, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified PurchaseResponse message, length delimited. Does not implicitly {@link PurchaseResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PurchaseResponse
     * @static
     * @param {IPurchaseResponse} message PurchaseResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PurchaseResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PurchaseResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PurchaseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PurchaseResponse} PurchaseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PurchaseResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PurchaseResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.purchase = $root.Purchase.decode(reader, reader.uint32());
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PurchaseResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PurchaseResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PurchaseResponse} PurchaseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PurchaseResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PurchaseResponse message.
     * @function verify
     * @memberof PurchaseResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PurchaseResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.purchase != null && message.hasOwnProperty("purchase")) {
            var error = $root.Purchase.verify(message.purchase);
            if (error)
                return "purchase." + error;
        }
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a PurchaseResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PurchaseResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PurchaseResponse} PurchaseResponse
     */
    PurchaseResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PurchaseResponse)
            return object;
        var message = new $root.PurchaseResponse();
        if (object.purchase != null) {
            if (typeof object.purchase !== "object")
                throw TypeError(".PurchaseResponse.purchase: object expected");
            message.purchase = $root.Purchase.fromObject(object.purchase);
        }
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a PurchaseResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PurchaseResponse
     * @static
     * @param {PurchaseResponse} message PurchaseResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PurchaseResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.purchase = null;
            object.error = "";
        }
        if (message.purchase != null && message.hasOwnProperty("purchase"))
            object.purchase = $root.Purchase.toObject(message.purchase, options);
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this PurchaseResponse to JSON.
     * @function toJSON
     * @memberof PurchaseResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PurchaseResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PurchaseResponse;
})();

$root.ListPurchasesRequest = (function() {

    /**
     * Properties of a ListPurchasesRequest.
     * @exports IListPurchasesRequest
     * @interface IListPurchasesRequest
     * @property {string|null} [userId] ListPurchasesRequest userId
     */

    /**
     * Constructs a new ListPurchasesRequest.
     * @exports ListPurchasesRequest
     * @classdesc Represents a ListPurchasesRequest.
     * @implements IListPurchasesRequest
     * @constructor
     * @param {IListPurchasesRequest=} [properties] Properties to set
     */
    function ListPurchasesRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListPurchasesRequest userId.
     * @member {string} userId
     * @memberof ListPurchasesRequest
     * @instance
     */
    ListPurchasesRequest.prototype.userId = "";

    /**
     * Creates a new ListPurchasesRequest instance using the specified properties.
     * @function create
     * @memberof ListPurchasesRequest
     * @static
     * @param {IListPurchasesRequest=} [properties] Properties to set
     * @returns {ListPurchasesRequest} ListPurchasesRequest instance
     */
    ListPurchasesRequest.create = function create(properties) {
        return new ListPurchasesRequest(properties);
    };

    /**
     * Encodes the specified ListPurchasesRequest message. Does not implicitly {@link ListPurchasesRequest.verify|verify} messages.
     * @function encode
     * @memberof ListPurchasesRequest
     * @static
     * @param {IListPurchasesRequest} message ListPurchasesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPurchasesRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && message.hasOwnProperty("userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified ListPurchasesRequest message, length delimited. Does not implicitly {@link ListPurchasesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListPurchasesRequest
     * @static
     * @param {IListPurchasesRequest} message ListPurchasesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPurchasesRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListPurchasesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ListPurchasesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListPurchasesRequest} ListPurchasesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPurchasesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListPurchasesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListPurchasesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListPurchasesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListPurchasesRequest} ListPurchasesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPurchasesRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListPurchasesRequest message.
     * @function verify
     * @memberof ListPurchasesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListPurchasesRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates a ListPurchasesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListPurchasesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListPurchasesRequest} ListPurchasesRequest
     */
    ListPurchasesRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ListPurchasesRequest)
            return object;
        var message = new $root.ListPurchasesRequest();
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from a ListPurchasesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListPurchasesRequest
     * @static
     * @param {ListPurchasesRequest} message ListPurchasesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListPurchasesRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userId = "";
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this ListPurchasesRequest to JSON.
     * @function toJSON
     * @memberof ListPurchasesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListPurchasesRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListPurchasesRequest;
})();

$root.ListPurchasesResponse = (function() {

    /**
     * Properties of a ListPurchasesResponse.
     * @exports IListPurchasesResponse
     * @interface IListPurchasesResponse
     * @property {Array.<IPurchase>|null} [purchases] ListPurchasesResponse purchases
     * @property {string|null} [error] ListPurchasesResponse error
     */

    /**
     * Constructs a new ListPurchasesResponse.
     * @exports ListPurchasesResponse
     * @classdesc Represents a ListPurchasesResponse.
     * @implements IListPurchasesResponse
     * @constructor
     * @param {IListPurchasesResponse=} [properties] Properties to set
     */
    function ListPurchasesResponse(properties) {
        this.purchases = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListPurchasesResponse purchases.
     * @member {Array.<IPurchase>} purchases
     * @memberof ListPurchasesResponse
     * @instance
     */
    ListPurchasesResponse.prototype.purchases = $util.emptyArray;

    /**
     * ListPurchasesResponse error.
     * @member {string} error
     * @memberof ListPurchasesResponse
     * @instance
     */
    ListPurchasesResponse.prototype.error = "";

    /**
     * Creates a new ListPurchasesResponse instance using the specified properties.
     * @function create
     * @memberof ListPurchasesResponse
     * @static
     * @param {IListPurchasesResponse=} [properties] Properties to set
     * @returns {ListPurchasesResponse} ListPurchasesResponse instance
     */
    ListPurchasesResponse.create = function create(properties) {
        return new ListPurchasesResponse(properties);
    };

    /**
     * Encodes the specified ListPurchasesResponse message. Does not implicitly {@link ListPurchasesResponse.verify|verify} messages.
     * @function encode
     * @memberof ListPurchasesResponse
     * @static
     * @param {IListPurchasesResponse} message ListPurchasesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPurchasesResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.purchases != null && message.purchases.length)
            for (var i = 0; i < message.purchases.length; ++i)
                $root.Purchase.encode(message.purchases[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified ListPurchasesResponse message, length delimited. Does not implicitly {@link ListPurchasesResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListPurchasesResponse
     * @static
     * @param {IListPurchasesResponse} message ListPurchasesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPurchasesResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListPurchasesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ListPurchasesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListPurchasesResponse} ListPurchasesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPurchasesResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListPurchasesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.purchases && message.purchases.length))
                    message.purchases = [];
                message.purchases.push($root.Purchase.decode(reader, reader.uint32()));
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListPurchasesResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListPurchasesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListPurchasesResponse} ListPurchasesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPurchasesResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListPurchasesResponse message.
     * @function verify
     * @memberof ListPurchasesResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListPurchasesResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.purchases != null && message.hasOwnProperty("purchases")) {
            if (!Array.isArray(message.purchases))
                return "purchases: array expected";
            for (var i = 0; i < message.purchases.length; ++i) {
                var error = $root.Purchase.verify(message.purchases[i]);
                if (error)
                    return "purchases." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a ListPurchasesResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListPurchasesResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListPurchasesResponse} ListPurchasesResponse
     */
    ListPurchasesResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ListPurchasesResponse)
            return object;
        var message = new $root.ListPurchasesResponse();
        if (object.purchases) {
            if (!Array.isArray(object.purchases))
                throw TypeError(".ListPurchasesResponse.purchases: array expected");
            message.purchases = [];
            for (var i = 0; i < object.purchases.length; ++i) {
                if (typeof object.purchases[i] !== "object")
                    throw TypeError(".ListPurchasesResponse.purchases: object expected");
                message.purchases[i] = $root.Purchase.fromObject(object.purchases[i]);
            }
        }
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a ListPurchasesResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListPurchasesResponse
     * @static
     * @param {ListPurchasesResponse} message ListPurchasesResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListPurchasesResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.purchases = [];
        if (options.defaults)
            object.error = "";
        if (message.purchases && message.purchases.length) {
            object.purchases = [];
            for (var j = 0; j < message.purchases.length; ++j)
                object.purchases[j] = $root.Purchase.toObject(message.purchases[j], options);
        }
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this ListPurchasesResponse to JSON.
     * @function toJSON
     * @memberof ListPurchasesResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListPurchasesResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListPurchasesResponse;
})();

$root.PurchaseService = (function() {

    /**
     * Constructs a new PurchaseService service.
     * @exports PurchaseService
     * @classdesc Represents a PurchaseService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function PurchaseService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (PurchaseService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PurchaseService;

    /**
     * Creates new PurchaseService service using the specified rpc implementation.
     * @function create
     * @memberof PurchaseService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {PurchaseService} RPC service. Useful where requests and/or responses are streamed.
     */
    PurchaseService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link PurchaseService#getPurchaseById}.
     * @memberof PurchaseService
     * @typedef GetPurchaseByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PurchaseResponse} [response] PurchaseResponse
     */

    /**
     * Calls GetPurchaseById.
     * @function getPurchaseById
     * @memberof PurchaseService
     * @instance
     * @param {IGetPurchaseByIdRequest} request GetPurchaseByIdRequest message or plain object
     * @param {PurchaseService.GetPurchaseByIdCallback} callback Node-style callback called with the error, if any, and PurchaseResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PurchaseService.prototype.getPurchaseById = function getPurchaseById(request, callback) {
        return this.rpcCall(getPurchaseById, $root.GetPurchaseByIdRequest, $root.PurchaseResponse, request, callback);
    }, "name", { value: "GetPurchaseById" });

    /**
     * Calls GetPurchaseById.
     * @function getPurchaseById
     * @memberof PurchaseService
     * @instance
     * @param {IGetPurchaseByIdRequest} request GetPurchaseByIdRequest message or plain object
     * @returns {Promise<PurchaseResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PurchaseService#listPurchases}.
     * @memberof PurchaseService
     * @typedef ListPurchasesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ListPurchasesResponse} [response] ListPurchasesResponse
     */

    /**
     * Calls ListPurchases.
     * @function listPurchases
     * @memberof PurchaseService
     * @instance
     * @param {IListPurchasesRequest} request ListPurchasesRequest message or plain object
     * @param {PurchaseService.ListPurchasesCallback} callback Node-style callback called with the error, if any, and ListPurchasesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PurchaseService.prototype.listPurchases = function listPurchases(request, callback) {
        return this.rpcCall(listPurchases, $root.ListPurchasesRequest, $root.ListPurchasesResponse, request, callback);
    }, "name", { value: "ListPurchases" });

    /**
     * Calls ListPurchases.
     * @function listPurchases
     * @memberof PurchaseService
     * @instance
     * @param {IListPurchasesRequest} request ListPurchasesRequest message or plain object
     * @returns {Promise<ListPurchasesResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PurchaseService#handlePurchase}.
     * @memberof PurchaseService
     * @typedef HandlePurchaseCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PurchaseResponse} [response] PurchaseResponse
     */

    /**
     * Calls HandlePurchase.
     * @function handlePurchase
     * @memberof PurchaseService
     * @instance
     * @param {IHandlePurchaseRequest} request HandlePurchaseRequest message or plain object
     * @param {PurchaseService.HandlePurchaseCallback} callback Node-style callback called with the error, if any, and PurchaseResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PurchaseService.prototype.handlePurchase = function handlePurchase(request, callback) {
        return this.rpcCall(handlePurchase, $root.HandlePurchaseRequest, $root.PurchaseResponse, request, callback);
    }, "name", { value: "HandlePurchase" });

    /**
     * Calls HandlePurchase.
     * @function handlePurchase
     * @memberof PurchaseService
     * @instance
     * @param {IHandlePurchaseRequest} request HandlePurchaseRequest message or plain object
     * @returns {Promise<PurchaseResponse>} Promise
     * @variation 2
     */

    return PurchaseService;
})();

module.exports = $root;
