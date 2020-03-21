import * as $protobuf from "protobufjs";
/** Properties of a User. */
export interface IUser {

    /** User id */
    id?: (string|null);

    /** User email */
    email?: (string|null);

    /** User username */
    username?: (string|null);

    /** User password */
    password?: (string|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User id. */
    public id: string;

    /** User email. */
    public email: string;

    /** User username. */
    public username: string;

    /** User password. */
    public password: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetUserByIdRequest. */
export interface IGetUserByIdRequest {

    /** GetUserByIdRequest id */
    id?: (string|null);
}

/** Represents a GetUserByIdRequest. */
export class GetUserByIdRequest implements IGetUserByIdRequest {

    /**
     * Constructs a new GetUserByIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUserByIdRequest);

    /** GetUserByIdRequest id. */
    public id: string;

    /**
     * Creates a new GetUserByIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUserByIdRequest instance
     */
    public static create(properties?: IGetUserByIdRequest): GetUserByIdRequest;

    /**
     * Encodes the specified GetUserByIdRequest message. Does not implicitly {@link GetUserByIdRequest.verify|verify} messages.
     * @param message GetUserByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUserByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUserByIdRequest message, length delimited. Does not implicitly {@link GetUserByIdRequest.verify|verify} messages.
     * @param message GetUserByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUserByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUserByIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUserByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUserByIdRequest;

    /**
     * Decodes a GetUserByIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUserByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUserByIdRequest;

    /**
     * Verifies a GetUserByIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUserByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUserByIdRequest
     */
    public static fromObject(object: { [k: string]: any }): GetUserByIdRequest;

    /**
     * Creates a plain object from a GetUserByIdRequest message. Also converts values to other types if specified.
     * @param message GetUserByIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUserByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUserByIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RegisterUserRequest. */
export interface IRegisterUserRequest {

    /** RegisterUserRequest user */
    user?: (IUser|null);
}

/** Represents a RegisterUserRequest. */
export class RegisterUserRequest implements IRegisterUserRequest {

    /**
     * Constructs a new RegisterUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegisterUserRequest);

    /** RegisterUserRequest user. */
    public user?: (IUser|null);

    /**
     * Creates a new RegisterUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegisterUserRequest instance
     */
    public static create(properties?: IRegisterUserRequest): RegisterUserRequest;

    /**
     * Encodes the specified RegisterUserRequest message. Does not implicitly {@link RegisterUserRequest.verify|verify} messages.
     * @param message RegisterUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegisterUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link RegisterUserRequest.verify|verify} messages.
     * @param message RegisterUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegisterUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegisterUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegisterUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegisterUserRequest;

    /**
     * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegisterUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegisterUserRequest;

    /**
     * Verifies a RegisterUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegisterUserRequest
     */
    public static fromObject(object: { [k: string]: any }): RegisterUserRequest;

    /**
     * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
     * @param message RegisterUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegisterUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegisterUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AuthenticationRequest. */
export interface IAuthenticationRequest {

    /** AuthenticationRequest token */
    token?: (string|null);
}

/** Represents an AuthenticationRequest. */
export class AuthenticationRequest implements IAuthenticationRequest {

    /**
     * Constructs a new AuthenticationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthenticationRequest);

    /** AuthenticationRequest token. */
    public token: string;

    /**
     * Creates a new AuthenticationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthenticationRequest instance
     */
    public static create(properties?: IAuthenticationRequest): AuthenticationRequest;

    /**
     * Encodes the specified AuthenticationRequest message. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @param message AuthenticationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @param message AuthenticationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthenticationRequest;

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthenticationRequest;

    /**
     * Verifies an AuthenticationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthenticationRequest
     */
    public static fromObject(object: { [k: string]: any }): AuthenticationRequest;

    /**
     * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
     * @param message AuthenticationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthenticationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthenticationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserResponse. */
export interface IUserResponse {

    /** UserResponse user */
    user?: (IUser|null);

    /** UserResponse error */
    error?: (string|null);
}

/** Represents a UserResponse. */
export class UserResponse implements IUserResponse {

    /**
     * Constructs a new UserResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserResponse);

    /** UserResponse user. */
    public user?: (IUser|null);

    /** UserResponse error. */
    public error: string;

    /**
     * Creates a new UserResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserResponse instance
     */
    public static create(properties?: IUserResponse): UserResponse;

    /**
     * Encodes the specified UserResponse message. Does not implicitly {@link UserResponse.verify|verify} messages.
     * @param message UserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserResponse message, length delimited. Does not implicitly {@link UserResponse.verify|verify} messages.
     * @param message UserResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserResponse;

    /**
     * Decodes a UserResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserResponse;

    /**
     * Verifies a UserResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserResponse
     */
    public static fromObject(object: { [k: string]: any }): UserResponse;

    /**
     * Creates a plain object from a UserResponse message. Also converts values to other types if specified.
     * @param message UserResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginUserRequest. */
export interface ILoginUserRequest {

    /** LoginUserRequest user */
    user?: (IUser|null);
}

/** Represents a LoginUserRequest. */
export class LoginUserRequest implements ILoginUserRequest {

    /**
     * Constructs a new LoginUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginUserRequest);

    /** LoginUserRequest user. */
    public user?: (IUser|null);

    /**
     * Creates a new LoginUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginUserRequest instance
     */
    public static create(properties?: ILoginUserRequest): LoginUserRequest;

    /**
     * Encodes the specified LoginUserRequest message. Does not implicitly {@link LoginUserRequest.verify|verify} messages.
     * @param message LoginUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link LoginUserRequest.verify|verify} messages.
     * @param message LoginUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginUserRequest;

    /**
     * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginUserRequest;

    /**
     * Verifies a LoginUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginUserRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginUserRequest;

    /**
     * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
     * @param message LoginUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse token */
    token?: (string|null);

    /** LoginResponse error */
    error?: (string|null);
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse token. */
    public token: string;

    /** LoginResponse error. */
    public error: string;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a UserService */
export class UserService extends $protobuf.rpc.Service {

    /**
     * Constructs a new UserService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new UserService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

    /**
     * Calls GetUserById.
     * @param request GetUserByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and UserResponse
     */
    public getUserById(request: IGetUserByIdRequest, callback: UserService.GetUserByIdCallback): void;

    /**
     * Calls GetUserById.
     * @param request GetUserByIdRequest message or plain object
     * @returns Promise
     */
    public getUserById(request: IGetUserByIdRequest): Promise<UserResponse>;

    /**
     * Calls RegisterUser.
     * @param request RegisterUserRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and UserResponse
     */
    public registerUser(request: IRegisterUserRequest, callback: UserService.RegisterUserCallback): void;

    /**
     * Calls RegisterUser.
     * @param request RegisterUserRequest message or plain object
     * @returns Promise
     */
    public registerUser(request: IRegisterUserRequest): Promise<UserResponse>;

    /**
     * Calls Authenticate.
     * @param request AuthenticationRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and UserResponse
     */
    public authenticate(request: IAuthenticationRequest, callback: UserService.AuthenticateCallback): void;

    /**
     * Calls Authenticate.
     * @param request AuthenticationRequest message or plain object
     * @returns Promise
     */
    public authenticate(request: IAuthenticationRequest): Promise<UserResponse>;

    /**
     * Calls LoginUser.
     * @param request LoginUserRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and LoginResponse
     */
    public loginUser(request: ILoginUserRequest, callback: UserService.LoginUserCallback): void;

    /**
     * Calls LoginUser.
     * @param request LoginUserRequest message or plain object
     * @returns Promise
     */
    public loginUser(request: ILoginUserRequest): Promise<LoginResponse>;
}

export namespace UserService {

    /**
     * Callback as used by {@link UserService#getUserById}.
     * @param error Error, if any
     * @param [response] UserResponse
     */
    type GetUserByIdCallback = (error: (Error|null), response?: UserResponse) => void;

    /**
     * Callback as used by {@link UserService#registerUser}.
     * @param error Error, if any
     * @param [response] UserResponse
     */
    type RegisterUserCallback = (error: (Error|null), response?: UserResponse) => void;

    /**
     * Callback as used by {@link UserService#authenticate}.
     * @param error Error, if any
     * @param [response] UserResponse
     */
    type AuthenticateCallback = (error: (Error|null), response?: UserResponse) => void;

    /**
     * Callback as used by {@link UserService#loginUser}.
     * @param error Error, if any
     * @param [response] LoginResponse
     */
    type LoginUserCallback = (error: (Error|null), response?: LoginResponse) => void;
}

/** Properties of a Purchase. */
export interface IPurchase {

    /** Purchase id */
    id?: (string|null);

    /** Purchase userId */
    userId?: (string|null);

    /** Purchase title */
    title?: (string|null);

    /** Purchase value */
    value?: (number|null);
}

/** Represents a Purchase. */
export class Purchase implements IPurchase {

    /**
     * Constructs a new Purchase.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPurchase);

    /** Purchase id. */
    public id: string;

    /** Purchase userId. */
    public userId: string;

    /** Purchase title. */
    public title: string;

    /** Purchase value. */
    public value: number;

    /**
     * Creates a new Purchase instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Purchase instance
     */
    public static create(properties?: IPurchase): Purchase;

    /**
     * Encodes the specified Purchase message. Does not implicitly {@link Purchase.verify|verify} messages.
     * @param message Purchase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Purchase message, length delimited. Does not implicitly {@link Purchase.verify|verify} messages.
     * @param message Purchase message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Purchase message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Purchase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Purchase;

    /**
     * Decodes a Purchase message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Purchase
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Purchase;

    /**
     * Verifies a Purchase message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Purchase message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Purchase
     */
    public static fromObject(object: { [k: string]: any }): Purchase;

    /**
     * Creates a plain object from a Purchase message. Also converts values to other types if specified.
     * @param message Purchase
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Purchase, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Purchase to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetPurchaseByIdRequest. */
export interface IGetPurchaseByIdRequest {

    /** GetPurchaseByIdRequest id */
    id?: (string|null);
}

/** Represents a GetPurchaseByIdRequest. */
export class GetPurchaseByIdRequest implements IGetPurchaseByIdRequest {

    /**
     * Constructs a new GetPurchaseByIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetPurchaseByIdRequest);

    /** GetPurchaseByIdRequest id. */
    public id: string;

    /**
     * Creates a new GetPurchaseByIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetPurchaseByIdRequest instance
     */
    public static create(properties?: IGetPurchaseByIdRequest): GetPurchaseByIdRequest;

    /**
     * Encodes the specified GetPurchaseByIdRequest message. Does not implicitly {@link GetPurchaseByIdRequest.verify|verify} messages.
     * @param message GetPurchaseByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetPurchaseByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetPurchaseByIdRequest message, length delimited. Does not implicitly {@link GetPurchaseByIdRequest.verify|verify} messages.
     * @param message GetPurchaseByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetPurchaseByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetPurchaseByIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetPurchaseByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetPurchaseByIdRequest;

    /**
     * Decodes a GetPurchaseByIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetPurchaseByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetPurchaseByIdRequest;

    /**
     * Verifies a GetPurchaseByIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetPurchaseByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetPurchaseByIdRequest
     */
    public static fromObject(object: { [k: string]: any }): GetPurchaseByIdRequest;

    /**
     * Creates a plain object from a GetPurchaseByIdRequest message. Also converts values to other types if specified.
     * @param message GetPurchaseByIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetPurchaseByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetPurchaseByIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a HandlePurchaseRequest. */
export interface IHandlePurchaseRequest {

    /** HandlePurchaseRequest purchase */
    purchase?: (IPurchase|null);
}

/** Represents a HandlePurchaseRequest. */
export class HandlePurchaseRequest implements IHandlePurchaseRequest {

    /**
     * Constructs a new HandlePurchaseRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandlePurchaseRequest);

    /** HandlePurchaseRequest purchase. */
    public purchase?: (IPurchase|null);

    /**
     * Creates a new HandlePurchaseRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandlePurchaseRequest instance
     */
    public static create(properties?: IHandlePurchaseRequest): HandlePurchaseRequest;

    /**
     * Encodes the specified HandlePurchaseRequest message. Does not implicitly {@link HandlePurchaseRequest.verify|verify} messages.
     * @param message HandlePurchaseRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandlePurchaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HandlePurchaseRequest message, length delimited. Does not implicitly {@link HandlePurchaseRequest.verify|verify} messages.
     * @param message HandlePurchaseRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandlePurchaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HandlePurchaseRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HandlePurchaseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HandlePurchaseRequest;

    /**
     * Decodes a HandlePurchaseRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HandlePurchaseRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HandlePurchaseRequest;

    /**
     * Verifies a HandlePurchaseRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HandlePurchaseRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HandlePurchaseRequest
     */
    public static fromObject(object: { [k: string]: any }): HandlePurchaseRequest;

    /**
     * Creates a plain object from a HandlePurchaseRequest message. Also converts values to other types if specified.
     * @param message HandlePurchaseRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HandlePurchaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HandlePurchaseRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PurchaseResponse. */
export interface IPurchaseResponse {

    /** PurchaseResponse purchase */
    purchase?: (IPurchase|null);

    /** PurchaseResponse error */
    error?: (string|null);
}

/** Represents a PurchaseResponse. */
export class PurchaseResponse implements IPurchaseResponse {

    /**
     * Constructs a new PurchaseResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPurchaseResponse);

    /** PurchaseResponse purchase. */
    public purchase?: (IPurchase|null);

    /** PurchaseResponse error. */
    public error: string;

    /**
     * Creates a new PurchaseResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PurchaseResponse instance
     */
    public static create(properties?: IPurchaseResponse): PurchaseResponse;

    /**
     * Encodes the specified PurchaseResponse message. Does not implicitly {@link PurchaseResponse.verify|verify} messages.
     * @param message PurchaseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPurchaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PurchaseResponse message, length delimited. Does not implicitly {@link PurchaseResponse.verify|verify} messages.
     * @param message PurchaseResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPurchaseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PurchaseResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PurchaseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PurchaseResponse;

    /**
     * Decodes a PurchaseResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PurchaseResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PurchaseResponse;

    /**
     * Verifies a PurchaseResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PurchaseResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PurchaseResponse
     */
    public static fromObject(object: { [k: string]: any }): PurchaseResponse;

    /**
     * Creates a plain object from a PurchaseResponse message. Also converts values to other types if specified.
     * @param message PurchaseResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PurchaseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PurchaseResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListPurchasesRequest. */
export interface IListPurchasesRequest {

    /** ListPurchasesRequest userId */
    userId?: (string|null);
}

/** Represents a ListPurchasesRequest. */
export class ListPurchasesRequest implements IListPurchasesRequest {

    /**
     * Constructs a new ListPurchasesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListPurchasesRequest);

    /** ListPurchasesRequest userId. */
    public userId: string;

    /**
     * Creates a new ListPurchasesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListPurchasesRequest instance
     */
    public static create(properties?: IListPurchasesRequest): ListPurchasesRequest;

    /**
     * Encodes the specified ListPurchasesRequest message. Does not implicitly {@link ListPurchasesRequest.verify|verify} messages.
     * @param message ListPurchasesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListPurchasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListPurchasesRequest message, length delimited. Does not implicitly {@link ListPurchasesRequest.verify|verify} messages.
     * @param message ListPurchasesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListPurchasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListPurchasesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListPurchasesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListPurchasesRequest;

    /**
     * Decodes a ListPurchasesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListPurchasesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListPurchasesRequest;

    /**
     * Verifies a ListPurchasesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListPurchasesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListPurchasesRequest
     */
    public static fromObject(object: { [k: string]: any }): ListPurchasesRequest;

    /**
     * Creates a plain object from a ListPurchasesRequest message. Also converts values to other types if specified.
     * @param message ListPurchasesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListPurchasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListPurchasesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListPurchasesResponse. */
export interface IListPurchasesResponse {

    /** ListPurchasesResponse purchases */
    purchases?: (IPurchase[]|null);

    /** ListPurchasesResponse error */
    error?: (string|null);
}

/** Represents a ListPurchasesResponse. */
export class ListPurchasesResponse implements IListPurchasesResponse {

    /**
     * Constructs a new ListPurchasesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListPurchasesResponse);

    /** ListPurchasesResponse purchases. */
    public purchases: IPurchase[];

    /** ListPurchasesResponse error. */
    public error: string;

    /**
     * Creates a new ListPurchasesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListPurchasesResponse instance
     */
    public static create(properties?: IListPurchasesResponse): ListPurchasesResponse;

    /**
     * Encodes the specified ListPurchasesResponse message. Does not implicitly {@link ListPurchasesResponse.verify|verify} messages.
     * @param message ListPurchasesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListPurchasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListPurchasesResponse message, length delimited. Does not implicitly {@link ListPurchasesResponse.verify|verify} messages.
     * @param message ListPurchasesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListPurchasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListPurchasesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListPurchasesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListPurchasesResponse;

    /**
     * Decodes a ListPurchasesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListPurchasesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListPurchasesResponse;

    /**
     * Verifies a ListPurchasesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListPurchasesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListPurchasesResponse
     */
    public static fromObject(object: { [k: string]: any }): ListPurchasesResponse;

    /**
     * Creates a plain object from a ListPurchasesResponse message. Also converts values to other types if specified.
     * @param message ListPurchasesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListPurchasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListPurchasesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a PurchaseService */
export class PurchaseService extends $protobuf.rpc.Service {

    /**
     * Constructs a new PurchaseService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new PurchaseService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PurchaseService;

    /**
     * Calls GetPurchaseById.
     * @param request GetPurchaseByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PurchaseResponse
     */
    public getPurchaseById(request: IGetPurchaseByIdRequest, callback: PurchaseService.GetPurchaseByIdCallback): void;

    /**
     * Calls GetPurchaseById.
     * @param request GetPurchaseByIdRequest message or plain object
     * @returns Promise
     */
    public getPurchaseById(request: IGetPurchaseByIdRequest): Promise<PurchaseResponse>;

    /**
     * Calls ListPurchases.
     * @param request ListPurchasesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ListPurchasesResponse
     */
    public listPurchases(request: IListPurchasesRequest, callback: PurchaseService.ListPurchasesCallback): void;

    /**
     * Calls ListPurchases.
     * @param request ListPurchasesRequest message or plain object
     * @returns Promise
     */
    public listPurchases(request: IListPurchasesRequest): Promise<ListPurchasesResponse>;

    /**
     * Calls HandlePurchase.
     * @param request HandlePurchaseRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PurchaseResponse
     */
    public handlePurchase(request: IHandlePurchaseRequest, callback: PurchaseService.HandlePurchaseCallback): void;

    /**
     * Calls HandlePurchase.
     * @param request HandlePurchaseRequest message or plain object
     * @returns Promise
     */
    public handlePurchase(request: IHandlePurchaseRequest): Promise<PurchaseResponse>;
}

export namespace PurchaseService {

    /**
     * Callback as used by {@link PurchaseService#getPurchaseById}.
     * @param error Error, if any
     * @param [response] PurchaseResponse
     */
    type GetPurchaseByIdCallback = (error: (Error|null), response?: PurchaseResponse) => void;

    /**
     * Callback as used by {@link PurchaseService#listPurchases}.
     * @param error Error, if any
     * @param [response] ListPurchasesResponse
     */
    type ListPurchasesCallback = (error: (Error|null), response?: ListPurchasesResponse) => void;

    /**
     * Callback as used by {@link PurchaseService#handlePurchase}.
     * @param error Error, if any
     * @param [response] PurchaseResponse
     */
    type HandlePurchaseCallback = (error: (Error|null), response?: PurchaseResponse) => void;
}
