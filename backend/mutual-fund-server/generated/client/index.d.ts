
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fund
 * 
 */
export type Fund = $Result.DefaultSelection<Prisma.$FundPayload>
/**
 * Model NavHistory
 * 
 */
export type NavHistory = $Result.DefaultSelection<Prisma.$NavHistoryPayload>
/**
 * Model Sip
 * 
 */
export type Sip = $Result.DefaultSelection<Prisma.$SipPayload>
/**
 * Model MfTransaction
 * 
 */
export type MfTransaction = $Result.DefaultSelection<Prisma.$MfTransactionPayload>
/**
 * Model ApiClient
 * 
 */
export type ApiClient = $Result.DefaultSelection<Prisma.$ApiClientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SipFrequency: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  WEEKLY: 'WEEKLY'
};

export type SipFrequency = (typeof SipFrequency)[keyof typeof SipFrequency]


export const SipStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type SipStatus = (typeof SipStatus)[keyof typeof SipStatus]


export const MfTransactionType: {
  PURCHASE: 'PURCHASE',
  REDEMPTION: 'REDEMPTION',
  SIP: 'SIP',
  DIVIDEND: 'DIVIDEND'
};

export type MfTransactionType = (typeof MfTransactionType)[keyof typeof MfTransactionType]

}

export type SipFrequency = $Enums.SipFrequency

export const SipFrequency: typeof $Enums.SipFrequency

export type SipStatus = $Enums.SipStatus

export const SipStatus: typeof $Enums.SipStatus

export type MfTransactionType = $Enums.MfTransactionType

export const MfTransactionType: typeof $Enums.MfTransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funds
 * const funds = await prisma.fund.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Funds
   * const funds = await prisma.fund.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funds
    * const funds = await prisma.fund.findMany()
    * ```
    */
  get fund(): Prisma.FundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navHistory`: Exposes CRUD operations for the **NavHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavHistories
    * const navHistories = await prisma.navHistory.findMany()
    * ```
    */
  get navHistory(): Prisma.NavHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sip`: Exposes CRUD operations for the **Sip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sips
    * const sips = await prisma.sip.findMany()
    * ```
    */
  get sip(): Prisma.SipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mfTransaction`: Exposes CRUD operations for the **MfTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MfTransactions
    * const mfTransactions = await prisma.mfTransaction.findMany()
    * ```
    */
  get mfTransaction(): Prisma.MfTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiClient`: Exposes CRUD operations for the **ApiClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiClients
    * const apiClients = await prisma.apiClient.findMany()
    * ```
    */
  get apiClient(): Prisma.ApiClientDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fund: 'Fund',
    NavHistory: 'NavHistory',
    Sip: 'Sip',
    MfTransaction: 'MfTransaction',
    ApiClient: 'ApiClient'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fund" | "navHistory" | "sip" | "mfTransaction" | "apiClient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fund: {
        payload: Prisma.$FundPayload<ExtArgs>
        fields: Prisma.FundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findFirst: {
            args: Prisma.FundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findMany: {
            args: Prisma.FundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          create: {
            args: Prisma.FundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          createMany: {
            args: Prisma.FundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          delete: {
            args: Prisma.FundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          update: {
            args: Prisma.FundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          deleteMany: {
            args: Prisma.FundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          upsert: {
            args: Prisma.FundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          aggregate: {
            args: Prisma.FundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFund>
          }
          groupBy: {
            args: Prisma.FundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundCountArgs<ExtArgs>
            result: $Utils.Optional<FundCountAggregateOutputType> | number
          }
        }
      }
      NavHistory: {
        payload: Prisma.$NavHistoryPayload<ExtArgs>
        fields: Prisma.NavHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          findFirst: {
            args: Prisma.NavHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          findMany: {
            args: Prisma.NavHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>[]
          }
          create: {
            args: Prisma.NavHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          createMany: {
            args: Prisma.NavHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>[]
          }
          delete: {
            args: Prisma.NavHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          update: {
            args: Prisma.NavHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          deleteMany: {
            args: Prisma.NavHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>[]
          }
          upsert: {
            args: Prisma.NavHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavHistoryPayload>
          }
          aggregate: {
            args: Prisma.NavHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavHistory>
          }
          groupBy: {
            args: Prisma.NavHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<NavHistoryCountAggregateOutputType> | number
          }
        }
      }
      Sip: {
        payload: Prisma.$SipPayload<ExtArgs>
        fields: Prisma.SipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          findFirst: {
            args: Prisma.SipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          findMany: {
            args: Prisma.SipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>[]
          }
          create: {
            args: Prisma.SipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          createMany: {
            args: Prisma.SipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>[]
          }
          delete: {
            args: Prisma.SipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          update: {
            args: Prisma.SipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          deleteMany: {
            args: Prisma.SipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>[]
          }
          upsert: {
            args: Prisma.SipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SipPayload>
          }
          aggregate: {
            args: Prisma.SipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSip>
          }
          groupBy: {
            args: Prisma.SipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SipCountArgs<ExtArgs>
            result: $Utils.Optional<SipCountAggregateOutputType> | number
          }
        }
      }
      MfTransaction: {
        payload: Prisma.$MfTransactionPayload<ExtArgs>
        fields: Prisma.MfTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MfTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MfTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          findFirst: {
            args: Prisma.MfTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MfTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          findMany: {
            args: Prisma.MfTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>[]
          }
          create: {
            args: Prisma.MfTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          createMany: {
            args: Prisma.MfTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MfTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>[]
          }
          delete: {
            args: Prisma.MfTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          update: {
            args: Prisma.MfTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          deleteMany: {
            args: Prisma.MfTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MfTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MfTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>[]
          }
          upsert: {
            args: Prisma.MfTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MfTransactionPayload>
          }
          aggregate: {
            args: Prisma.MfTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMfTransaction>
          }
          groupBy: {
            args: Prisma.MfTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MfTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MfTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<MfTransactionCountAggregateOutputType> | number
          }
        }
      }
      ApiClient: {
        payload: Prisma.$ApiClientPayload<ExtArgs>
        fields: Prisma.ApiClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          findFirst: {
            args: Prisma.ApiClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          findMany: {
            args: Prisma.ApiClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          create: {
            args: Prisma.ApiClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          createMany: {
            args: Prisma.ApiClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          delete: {
            args: Prisma.ApiClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          update: {
            args: Prisma.ApiClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          deleteMany: {
            args: Prisma.ApiClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>[]
          }
          upsert: {
            args: Prisma.ApiClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiClientPayload>
          }
          aggregate: {
            args: Prisma.ApiClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiClient>
          }
          groupBy: {
            args: Prisma.ApiClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiClientCountArgs<ExtArgs>
            result: $Utils.Optional<ApiClientCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fund?: FundOmit
    navHistory?: NavHistoryOmit
    sip?: SipOmit
    mfTransaction?: MfTransactionOmit
    apiClient?: ApiClientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FundCountOutputType
   */

  export type FundCountOutputType = {
    navHistory: number
    sips: number
    transactions: number
  }

  export type FundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navHistory?: boolean | FundCountOutputTypeCountNavHistoryArgs
    sips?: boolean | FundCountOutputTypeCountSipsArgs
    transactions?: boolean | FundCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * FundCountOutputType without action
   */
  export type FundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCountOutputType
     */
    select?: FundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FundCountOutputType without action
   */
  export type FundCountOutputTypeCountNavHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavHistoryWhereInput
  }

  /**
   * FundCountOutputType without action
   */
  export type FundCountOutputTypeCountSipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipWhereInput
  }

  /**
   * FundCountOutputType without action
   */
  export type FundCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Fund
   */

  export type AggregateFund = {
    _count: FundCountAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  export type FundMinAggregateOutputType = {
    id: string | null
    schemeCode: string | null
    name: string | null
    category: string | null
    amc: string | null
    riskLevel: string | null
    createdAt: Date | null
  }

  export type FundMaxAggregateOutputType = {
    id: string | null
    schemeCode: string | null
    name: string | null
    category: string | null
    amc: string | null
    riskLevel: string | null
    createdAt: Date | null
  }

  export type FundCountAggregateOutputType = {
    id: number
    schemeCode: number
    name: number
    category: number
    amc: number
    riskLevel: number
    createdAt: number
    _all: number
  }


  export type FundMinAggregateInputType = {
    id?: true
    schemeCode?: true
    name?: true
    category?: true
    amc?: true
    riskLevel?: true
    createdAt?: true
  }

  export type FundMaxAggregateInputType = {
    id?: true
    schemeCode?: true
    name?: true
    category?: true
    amc?: true
    riskLevel?: true
    createdAt?: true
  }

  export type FundCountAggregateInputType = {
    id?: true
    schemeCode?: true
    name?: true
    category?: true
    amc?: true
    riskLevel?: true
    createdAt?: true
    _all?: true
  }

  export type FundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fund to aggregate.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funds
    **/
    _count?: true | FundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundMaxAggregateInputType
  }

  export type GetFundAggregateType<T extends FundAggregateArgs> = {
        [P in keyof T & keyof AggregateFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFund[P]>
      : GetScalarType<T[P], AggregateFund[P]>
  }




  export type FundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
    orderBy?: FundOrderByWithAggregationInput | FundOrderByWithAggregationInput[]
    by: FundScalarFieldEnum[] | FundScalarFieldEnum
    having?: FundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCountAggregateInputType | true
    _min?: FundMinAggregateInputType
    _max?: FundMaxAggregateInputType
  }

  export type FundGroupByOutputType = {
    id: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt: Date
    _count: FundCountAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  type GetFundGroupByPayload<T extends FundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundGroupByOutputType[P]>
            : GetScalarType<T[P], FundGroupByOutputType[P]>
        }
      >
    >


  export type FundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schemeCode?: boolean
    name?: boolean
    category?: boolean
    amc?: boolean
    riskLevel?: boolean
    createdAt?: boolean
    navHistory?: boolean | Fund$navHistoryArgs<ExtArgs>
    sips?: boolean | Fund$sipsArgs<ExtArgs>
    transactions?: boolean | Fund$transactionsArgs<ExtArgs>
    _count?: boolean | FundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fund"]>

  export type FundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schemeCode?: boolean
    name?: boolean
    category?: boolean
    amc?: boolean
    riskLevel?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schemeCode?: boolean
    name?: boolean
    category?: boolean
    amc?: boolean
    riskLevel?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectScalar = {
    id?: boolean
    schemeCode?: boolean
    name?: boolean
    category?: boolean
    amc?: boolean
    riskLevel?: boolean
    createdAt?: boolean
  }

  export type FundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schemeCode" | "name" | "category" | "amc" | "riskLevel" | "createdAt", ExtArgs["result"]["fund"]>
  export type FundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navHistory?: boolean | Fund$navHistoryArgs<ExtArgs>
    sips?: boolean | Fund$sipsArgs<ExtArgs>
    transactions?: boolean | Fund$transactionsArgs<ExtArgs>
    _count?: boolean | FundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fund"
    objects: {
      navHistory: Prisma.$NavHistoryPayload<ExtArgs>[]
      sips: Prisma.$SipPayload<ExtArgs>[]
      transactions: Prisma.$MfTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schemeCode: string
      name: string
      category: string
      amc: string
      riskLevel: string
      createdAt: Date
    }, ExtArgs["result"]["fund"]>
    composites: {}
  }

  type FundGetPayload<S extends boolean | null | undefined | FundDefaultArgs> = $Result.GetResult<Prisma.$FundPayload, S>

  type FundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundCountAggregateInputType | true
    }

  export interface FundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fund'], meta: { name: 'Fund' } }
    /**
     * Find zero or one Fund that matches the filter.
     * @param {FundFindUniqueArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundFindUniqueArgs>(args: SelectSubset<T, FundFindUniqueArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundFindUniqueOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundFindFirstArgs>(args?: SelectSubset<T, FundFindFirstArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funds
     * const funds = await prisma.fund.findMany()
     * 
     * // Get first 10 Funds
     * const funds = await prisma.fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundWithIdOnly = await prisma.fund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundFindManyArgs>(args?: SelectSubset<T, FundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fund.
     * @param {FundCreateArgs} args - Arguments to create a Fund.
     * @example
     * // Create one Fund
     * const Fund = await prisma.fund.create({
     *   data: {
     *     // ... data to create a Fund
     *   }
     * })
     * 
     */
    create<T extends FundCreateArgs>(args: SelectSubset<T, FundCreateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funds.
     * @param {FundCreateManyArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundCreateManyArgs>(args?: SelectSubset<T, FundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funds and returns the data saved in the database.
     * @param {FundCreateManyAndReturnArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundCreateManyAndReturnArgs>(args?: SelectSubset<T, FundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fund.
     * @param {FundDeleteArgs} args - Arguments to delete one Fund.
     * @example
     * // Delete one Fund
     * const Fund = await prisma.fund.delete({
     *   where: {
     *     // ... filter to delete one Fund
     *   }
     * })
     * 
     */
    delete<T extends FundDeleteArgs>(args: SelectSubset<T, FundDeleteArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fund.
     * @param {FundUpdateArgs} args - Arguments to update one Fund.
     * @example
     * // Update one Fund
     * const fund = await prisma.fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundUpdateArgs>(args: SelectSubset<T, FundUpdateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funds.
     * @param {FundDeleteManyArgs} args - Arguments to filter Funds to delete.
     * @example
     * // Delete a few Funds
     * const { count } = await prisma.fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundDeleteManyArgs>(args?: SelectSubset<T, FundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundUpdateManyArgs>(args: SelectSubset<T, FundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds and returns the data updated in the database.
     * @param {FundUpdateManyAndReturnArgs} args - Arguments to update many Funds.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FundUpdateManyAndReturnArgs>(args: SelectSubset<T, FundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fund.
     * @param {FundUpsertArgs} args - Arguments to update or create a Fund.
     * @example
     * // Update or create a Fund
     * const fund = await prisma.fund.upsert({
     *   create: {
     *     // ... data to create a Fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fund we want to update
     *   }
     * })
     */
    upsert<T extends FundUpsertArgs>(args: SelectSubset<T, FundUpsertArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCountArgs} args - Arguments to filter Funds to count.
     * @example
     * // Count the number of Funds
     * const count = await prisma.fund.count({
     *   where: {
     *     // ... the filter for the Funds we want to count
     *   }
     * })
    **/
    count<T extends FundCountArgs>(
      args?: Subset<T, FundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundAggregateArgs>(args: Subset<T, FundAggregateArgs>): Prisma.PrismaPromise<GetFundAggregateType<T>>

    /**
     * Group by Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundGroupByArgs['orderBy'] }
        : { orderBy?: FundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fund model
   */
  readonly fields: FundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    navHistory<T extends Fund$navHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Fund$navHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sips<T extends Fund$sipsArgs<ExtArgs> = {}>(args?: Subset<T, Fund$sipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Fund$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Fund$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fund model
   */
  interface FundFieldRefs {
    readonly id: FieldRef<"Fund", 'String'>
    readonly schemeCode: FieldRef<"Fund", 'String'>
    readonly name: FieldRef<"Fund", 'String'>
    readonly category: FieldRef<"Fund", 'String'>
    readonly amc: FieldRef<"Fund", 'String'>
    readonly riskLevel: FieldRef<"Fund", 'String'>
    readonly createdAt: FieldRef<"Fund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fund findUnique
   */
  export type FundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findUniqueOrThrow
   */
  export type FundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findFirst
   */
  export type FundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findFirstOrThrow
   */
  export type FundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findMany
   */
  export type FundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter, which Funds to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund create
   */
  export type FundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The data needed to create a Fund.
     */
    data: XOR<FundCreateInput, FundUncheckedCreateInput>
  }

  /**
   * Fund createMany
   */
  export type FundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund createManyAndReturn
   */
  export type FundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund update
   */
  export type FundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The data needed to update a Fund.
     */
    data: XOR<FundUpdateInput, FundUncheckedUpdateInput>
    /**
     * Choose, which Fund to update.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund updateMany
   */
  export type FundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
  }

  /**
   * Fund updateManyAndReturn
   */
  export type FundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
  }

  /**
   * Fund upsert
   */
  export type FundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * The filter to search for the Fund to update in case it exists.
     */
    where: FundWhereUniqueInput
    /**
     * In case the Fund found by the `where` argument doesn't exist, create a new Fund with this data.
     */
    create: XOR<FundCreateInput, FundUncheckedCreateInput>
    /**
     * In case the Fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundUpdateInput, FundUncheckedUpdateInput>
  }

  /**
   * Fund delete
   */
  export type FundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
    /**
     * Filter which Fund to delete.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund deleteMany
   */
  export type FundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funds to delete
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to delete.
     */
    limit?: number
  }

  /**
   * Fund.navHistory
   */
  export type Fund$navHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    where?: NavHistoryWhereInput
    orderBy?: NavHistoryOrderByWithRelationInput | NavHistoryOrderByWithRelationInput[]
    cursor?: NavHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NavHistoryScalarFieldEnum | NavHistoryScalarFieldEnum[]
  }

  /**
   * Fund.sips
   */
  export type Fund$sipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    where?: SipWhereInput
    orderBy?: SipOrderByWithRelationInput | SipOrderByWithRelationInput[]
    cursor?: SipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SipScalarFieldEnum | SipScalarFieldEnum[]
  }

  /**
   * Fund.transactions
   */
  export type Fund$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    where?: MfTransactionWhereInput
    orderBy?: MfTransactionOrderByWithRelationInput | MfTransactionOrderByWithRelationInput[]
    cursor?: MfTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MfTransactionScalarFieldEnum | MfTransactionScalarFieldEnum[]
  }

  /**
   * Fund without action
   */
  export type FundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundInclude<ExtArgs> | null
  }


  /**
   * Model NavHistory
   */

  export type AggregateNavHistory = {
    _count: NavHistoryCountAggregateOutputType | null
    _avg: NavHistoryAvgAggregateOutputType | null
    _sum: NavHistorySumAggregateOutputType | null
    _min: NavHistoryMinAggregateOutputType | null
    _max: NavHistoryMaxAggregateOutputType | null
  }

  export type NavHistoryAvgAggregateOutputType = {
    nav: Decimal | null
  }

  export type NavHistorySumAggregateOutputType = {
    nav: Decimal | null
  }

  export type NavHistoryMinAggregateOutputType = {
    id: string | null
    fundId: string | null
    nav: Decimal | null
    navDate: Date | null
    createdAt: Date | null
  }

  export type NavHistoryMaxAggregateOutputType = {
    id: string | null
    fundId: string | null
    nav: Decimal | null
    navDate: Date | null
    createdAt: Date | null
  }

  export type NavHistoryCountAggregateOutputType = {
    id: number
    fundId: number
    nav: number
    navDate: number
    createdAt: number
    _all: number
  }


  export type NavHistoryAvgAggregateInputType = {
    nav?: true
  }

  export type NavHistorySumAggregateInputType = {
    nav?: true
  }

  export type NavHistoryMinAggregateInputType = {
    id?: true
    fundId?: true
    nav?: true
    navDate?: true
    createdAt?: true
  }

  export type NavHistoryMaxAggregateInputType = {
    id?: true
    fundId?: true
    nav?: true
    navDate?: true
    createdAt?: true
  }

  export type NavHistoryCountAggregateInputType = {
    id?: true
    fundId?: true
    nav?: true
    navDate?: true
    createdAt?: true
    _all?: true
  }

  export type NavHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavHistory to aggregate.
     */
    where?: NavHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavHistories to fetch.
     */
    orderBy?: NavHistoryOrderByWithRelationInput | NavHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavHistories
    **/
    _count?: true | NavHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavHistoryMaxAggregateInputType
  }

  export type GetNavHistoryAggregateType<T extends NavHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNavHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavHistory[P]>
      : GetScalarType<T[P], AggregateNavHistory[P]>
  }




  export type NavHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavHistoryWhereInput
    orderBy?: NavHistoryOrderByWithAggregationInput | NavHistoryOrderByWithAggregationInput[]
    by: NavHistoryScalarFieldEnum[] | NavHistoryScalarFieldEnum
    having?: NavHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavHistoryCountAggregateInputType | true
    _avg?: NavHistoryAvgAggregateInputType
    _sum?: NavHistorySumAggregateInputType
    _min?: NavHistoryMinAggregateInputType
    _max?: NavHistoryMaxAggregateInputType
  }

  export type NavHistoryGroupByOutputType = {
    id: string
    fundId: string
    nav: Decimal
    navDate: Date
    createdAt: Date
    _count: NavHistoryCountAggregateOutputType | null
    _avg: NavHistoryAvgAggregateOutputType | null
    _sum: NavHistorySumAggregateOutputType | null
    _min: NavHistoryMinAggregateOutputType | null
    _max: NavHistoryMaxAggregateOutputType | null
  }

  type GetNavHistoryGroupByPayload<T extends NavHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], NavHistoryGroupByOutputType[P]>
        }
      >
    >


  export type NavHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundId?: boolean
    nav?: boolean
    navDate?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navHistory"]>

  export type NavHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundId?: boolean
    nav?: boolean
    navDate?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navHistory"]>

  export type NavHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fundId?: boolean
    nav?: boolean
    navDate?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navHistory"]>

  export type NavHistorySelectScalar = {
    id?: boolean
    fundId?: boolean
    nav?: boolean
    navDate?: boolean
    createdAt?: boolean
  }

  export type NavHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fundId" | "nav" | "navDate" | "createdAt", ExtArgs["result"]["navHistory"]>
  export type NavHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type NavHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type NavHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }

  export type $NavHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavHistory"
    objects: {
      fund: Prisma.$FundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fundId: string
      nav: Prisma.Decimal
      navDate: Date
      createdAt: Date
    }, ExtArgs["result"]["navHistory"]>
    composites: {}
  }

  type NavHistoryGetPayload<S extends boolean | null | undefined | NavHistoryDefaultArgs> = $Result.GetResult<Prisma.$NavHistoryPayload, S>

  type NavHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavHistoryCountAggregateInputType | true
    }

  export interface NavHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavHistory'], meta: { name: 'NavHistory' } }
    /**
     * Find zero or one NavHistory that matches the filter.
     * @param {NavHistoryFindUniqueArgs} args - Arguments to find a NavHistory
     * @example
     * // Get one NavHistory
     * const navHistory = await prisma.navHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavHistoryFindUniqueArgs>(args: SelectSubset<T, NavHistoryFindUniqueArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NavHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavHistoryFindUniqueOrThrowArgs} args - Arguments to find a NavHistory
     * @example
     * // Get one NavHistory
     * const navHistory = await prisma.navHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NavHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryFindFirstArgs} args - Arguments to find a NavHistory
     * @example
     * // Get one NavHistory
     * const navHistory = await prisma.navHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavHistoryFindFirstArgs>(args?: SelectSubset<T, NavHistoryFindFirstArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryFindFirstOrThrowArgs} args - Arguments to find a NavHistory
     * @example
     * // Get one NavHistory
     * const navHistory = await prisma.navHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NavHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NavHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavHistories
     * const navHistories = await prisma.navHistory.findMany()
     * 
     * // Get first 10 NavHistories
     * const navHistories = await prisma.navHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navHistoryWithIdOnly = await prisma.navHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavHistoryFindManyArgs>(args?: SelectSubset<T, NavHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NavHistory.
     * @param {NavHistoryCreateArgs} args - Arguments to create a NavHistory.
     * @example
     * // Create one NavHistory
     * const NavHistory = await prisma.navHistory.create({
     *   data: {
     *     // ... data to create a NavHistory
     *   }
     * })
     * 
     */
    create<T extends NavHistoryCreateArgs>(args: SelectSubset<T, NavHistoryCreateArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NavHistories.
     * @param {NavHistoryCreateManyArgs} args - Arguments to create many NavHistories.
     * @example
     * // Create many NavHistories
     * const navHistory = await prisma.navHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavHistoryCreateManyArgs>(args?: SelectSubset<T, NavHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavHistories and returns the data saved in the database.
     * @param {NavHistoryCreateManyAndReturnArgs} args - Arguments to create many NavHistories.
     * @example
     * // Create many NavHistories
     * const navHistory = await prisma.navHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavHistories and only return the `id`
     * const navHistoryWithIdOnly = await prisma.navHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NavHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NavHistory.
     * @param {NavHistoryDeleteArgs} args - Arguments to delete one NavHistory.
     * @example
     * // Delete one NavHistory
     * const NavHistory = await prisma.navHistory.delete({
     *   where: {
     *     // ... filter to delete one NavHistory
     *   }
     * })
     * 
     */
    delete<T extends NavHistoryDeleteArgs>(args: SelectSubset<T, NavHistoryDeleteArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NavHistory.
     * @param {NavHistoryUpdateArgs} args - Arguments to update one NavHistory.
     * @example
     * // Update one NavHistory
     * const navHistory = await prisma.navHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavHistoryUpdateArgs>(args: SelectSubset<T, NavHistoryUpdateArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NavHistories.
     * @param {NavHistoryDeleteManyArgs} args - Arguments to filter NavHistories to delete.
     * @example
     * // Delete a few NavHistories
     * const { count } = await prisma.navHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavHistoryDeleteManyArgs>(args?: SelectSubset<T, NavHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavHistories
     * const navHistory = await prisma.navHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavHistoryUpdateManyArgs>(args: SelectSubset<T, NavHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavHistories and returns the data updated in the database.
     * @param {NavHistoryUpdateManyAndReturnArgs} args - Arguments to update many NavHistories.
     * @example
     * // Update many NavHistories
     * const navHistory = await prisma.navHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NavHistories and only return the `id`
     * const navHistoryWithIdOnly = await prisma.navHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NavHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NavHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NavHistory.
     * @param {NavHistoryUpsertArgs} args - Arguments to update or create a NavHistory.
     * @example
     * // Update or create a NavHistory
     * const navHistory = await prisma.navHistory.upsert({
     *   create: {
     *     // ... data to create a NavHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavHistory we want to update
     *   }
     * })
     */
    upsert<T extends NavHistoryUpsertArgs>(args: SelectSubset<T, NavHistoryUpsertArgs<ExtArgs>>): Prisma__NavHistoryClient<$Result.GetResult<Prisma.$NavHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NavHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryCountArgs} args - Arguments to filter NavHistories to count.
     * @example
     * // Count the number of NavHistories
     * const count = await prisma.navHistory.count({
     *   where: {
     *     // ... the filter for the NavHistories we want to count
     *   }
     * })
    **/
    count<T extends NavHistoryCountArgs>(
      args?: Subset<T, NavHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavHistoryAggregateArgs>(args: Subset<T, NavHistoryAggregateArgs>): Prisma.PrismaPromise<GetNavHistoryAggregateType<T>>

    /**
     * Group by NavHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavHistoryGroupByArgs['orderBy'] }
        : { orderBy?: NavHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavHistory model
   */
  readonly fields: NavHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fund<T extends FundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundDefaultArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NavHistory model
   */
  interface NavHistoryFieldRefs {
    readonly id: FieldRef<"NavHistory", 'String'>
    readonly fundId: FieldRef<"NavHistory", 'String'>
    readonly nav: FieldRef<"NavHistory", 'Decimal'>
    readonly navDate: FieldRef<"NavHistory", 'DateTime'>
    readonly createdAt: FieldRef<"NavHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NavHistory findUnique
   */
  export type NavHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NavHistory to fetch.
     */
    where: NavHistoryWhereUniqueInput
  }

  /**
   * NavHistory findUniqueOrThrow
   */
  export type NavHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NavHistory to fetch.
     */
    where: NavHistoryWhereUniqueInput
  }

  /**
   * NavHistory findFirst
   */
  export type NavHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NavHistory to fetch.
     */
    where?: NavHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavHistories to fetch.
     */
    orderBy?: NavHistoryOrderByWithRelationInput | NavHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavHistories.
     */
    cursor?: NavHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavHistories.
     */
    distinct?: NavHistoryScalarFieldEnum | NavHistoryScalarFieldEnum[]
  }

  /**
   * NavHistory findFirstOrThrow
   */
  export type NavHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NavHistory to fetch.
     */
    where?: NavHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavHistories to fetch.
     */
    orderBy?: NavHistoryOrderByWithRelationInput | NavHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavHistories.
     */
    cursor?: NavHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavHistories.
     */
    distinct?: NavHistoryScalarFieldEnum | NavHistoryScalarFieldEnum[]
  }

  /**
   * NavHistory findMany
   */
  export type NavHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NavHistories to fetch.
     */
    where?: NavHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavHistories to fetch.
     */
    orderBy?: NavHistoryOrderByWithRelationInput | NavHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavHistories.
     */
    cursor?: NavHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavHistories.
     */
    skip?: number
    distinct?: NavHistoryScalarFieldEnum | NavHistoryScalarFieldEnum[]
  }

  /**
   * NavHistory create
   */
  export type NavHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NavHistory.
     */
    data: XOR<NavHistoryCreateInput, NavHistoryUncheckedCreateInput>
  }

  /**
   * NavHistory createMany
   */
  export type NavHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavHistories.
     */
    data: NavHistoryCreateManyInput | NavHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavHistory createManyAndReturn
   */
  export type NavHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many NavHistories.
     */
    data: NavHistoryCreateManyInput | NavHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavHistory update
   */
  export type NavHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NavHistory.
     */
    data: XOR<NavHistoryUpdateInput, NavHistoryUncheckedUpdateInput>
    /**
     * Choose, which NavHistory to update.
     */
    where: NavHistoryWhereUniqueInput
  }

  /**
   * NavHistory updateMany
   */
  export type NavHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavHistories.
     */
    data: XOR<NavHistoryUpdateManyMutationInput, NavHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NavHistories to update
     */
    where?: NavHistoryWhereInput
    /**
     * Limit how many NavHistories to update.
     */
    limit?: number
  }

  /**
   * NavHistory updateManyAndReturn
   */
  export type NavHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * The data used to update NavHistories.
     */
    data: XOR<NavHistoryUpdateManyMutationInput, NavHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NavHistories to update
     */
    where?: NavHistoryWhereInput
    /**
     * Limit how many NavHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavHistory upsert
   */
  export type NavHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NavHistory to update in case it exists.
     */
    where: NavHistoryWhereUniqueInput
    /**
     * In case the NavHistory found by the `where` argument doesn't exist, create a new NavHistory with this data.
     */
    create: XOR<NavHistoryCreateInput, NavHistoryUncheckedCreateInput>
    /**
     * In case the NavHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavHistoryUpdateInput, NavHistoryUncheckedUpdateInput>
  }

  /**
   * NavHistory delete
   */
  export type NavHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
    /**
     * Filter which NavHistory to delete.
     */
    where: NavHistoryWhereUniqueInput
  }

  /**
   * NavHistory deleteMany
   */
  export type NavHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavHistories to delete
     */
    where?: NavHistoryWhereInput
    /**
     * Limit how many NavHistories to delete.
     */
    limit?: number
  }

  /**
   * NavHistory without action
   */
  export type NavHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavHistory
     */
    select?: NavHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavHistory
     */
    omit?: NavHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Sip
   */

  export type AggregateSip = {
    _count: SipCountAggregateOutputType | null
    _avg: SipAvgAggregateOutputType | null
    _sum: SipSumAggregateOutputType | null
    _min: SipMinAggregateOutputType | null
    _max: SipMaxAggregateOutputType | null
  }

  export type SipAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SipSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SipMinAggregateOutputType = {
    id: string | null
    investorRef: string | null
    fundId: string | null
    amount: Decimal | null
    frequency: $Enums.SipFrequency | null
    status: $Enums.SipStatus | null
    startDate: Date | null
    nextDueDate: Date | null
    mandateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SipMaxAggregateOutputType = {
    id: string | null
    investorRef: string | null
    fundId: string | null
    amount: Decimal | null
    frequency: $Enums.SipFrequency | null
    status: $Enums.SipStatus | null
    startDate: Date | null
    nextDueDate: Date | null
    mandateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SipCountAggregateOutputType = {
    id: number
    investorRef: number
    fundId: number
    amount: number
    frequency: number
    status: number
    startDate: number
    nextDueDate: number
    mandateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SipAvgAggregateInputType = {
    amount?: true
  }

  export type SipSumAggregateInputType = {
    amount?: true
  }

  export type SipMinAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    amount?: true
    frequency?: true
    status?: true
    startDate?: true
    nextDueDate?: true
    mandateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SipMaxAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    amount?: true
    frequency?: true
    status?: true
    startDate?: true
    nextDueDate?: true
    mandateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SipCountAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    amount?: true
    frequency?: true
    status?: true
    startDate?: true
    nextDueDate?: true
    mandateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sip to aggregate.
     */
    where?: SipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sips to fetch.
     */
    orderBy?: SipOrderByWithRelationInput | SipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sips
    **/
    _count?: true | SipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SipMaxAggregateInputType
  }

  export type GetSipAggregateType<T extends SipAggregateArgs> = {
        [P in keyof T & keyof AggregateSip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSip[P]>
      : GetScalarType<T[P], AggregateSip[P]>
  }




  export type SipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SipWhereInput
    orderBy?: SipOrderByWithAggregationInput | SipOrderByWithAggregationInput[]
    by: SipScalarFieldEnum[] | SipScalarFieldEnum
    having?: SipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SipCountAggregateInputType | true
    _avg?: SipAvgAggregateInputType
    _sum?: SipSumAggregateInputType
    _min?: SipMinAggregateInputType
    _max?: SipMaxAggregateInputType
  }

  export type SipGroupByOutputType = {
    id: string
    investorRef: string
    fundId: string
    amount: Decimal
    frequency: $Enums.SipFrequency
    status: $Enums.SipStatus
    startDate: Date
    nextDueDate: Date | null
    mandateId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SipCountAggregateOutputType | null
    _avg: SipAvgAggregateOutputType | null
    _sum: SipSumAggregateOutputType | null
    _min: SipMinAggregateOutputType | null
    _max: SipMaxAggregateOutputType | null
  }

  type GetSipGroupByPayload<T extends SipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SipGroupByOutputType[P]>
            : GetScalarType<T[P], SipGroupByOutputType[P]>
        }
      >
    >


  export type SipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    amount?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    nextDueDate?: boolean
    mandateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sip"]>

  export type SipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    amount?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    nextDueDate?: boolean
    mandateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sip"]>

  export type SipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    amount?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    nextDueDate?: boolean
    mandateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sip"]>

  export type SipSelectScalar = {
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    amount?: boolean
    frequency?: boolean
    status?: boolean
    startDate?: boolean
    nextDueDate?: boolean
    mandateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investorRef" | "fundId" | "amount" | "frequency" | "status" | "startDate" | "nextDueDate" | "mandateId" | "createdAt" | "updatedAt", ExtArgs["result"]["sip"]>
  export type SipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type SipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type SipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }

  export type $SipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sip"
    objects: {
      fund: Prisma.$FundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      investorRef: string
      fundId: string
      amount: Prisma.Decimal
      frequency: $Enums.SipFrequency
      status: $Enums.SipStatus
      startDate: Date
      nextDueDate: Date | null
      mandateId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sip"]>
    composites: {}
  }

  type SipGetPayload<S extends boolean | null | undefined | SipDefaultArgs> = $Result.GetResult<Prisma.$SipPayload, S>

  type SipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SipCountAggregateInputType | true
    }

  export interface SipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sip'], meta: { name: 'Sip' } }
    /**
     * Find zero or one Sip that matches the filter.
     * @param {SipFindUniqueArgs} args - Arguments to find a Sip
     * @example
     * // Get one Sip
     * const sip = await prisma.sip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SipFindUniqueArgs>(args: SelectSubset<T, SipFindUniqueArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SipFindUniqueOrThrowArgs} args - Arguments to find a Sip
     * @example
     * // Get one Sip
     * const sip = await prisma.sip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SipFindUniqueOrThrowArgs>(args: SelectSubset<T, SipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipFindFirstArgs} args - Arguments to find a Sip
     * @example
     * // Get one Sip
     * const sip = await prisma.sip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SipFindFirstArgs>(args?: SelectSubset<T, SipFindFirstArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipFindFirstOrThrowArgs} args - Arguments to find a Sip
     * @example
     * // Get one Sip
     * const sip = await prisma.sip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SipFindFirstOrThrowArgs>(args?: SelectSubset<T, SipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sips
     * const sips = await prisma.sip.findMany()
     * 
     * // Get first 10 Sips
     * const sips = await prisma.sip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sipWithIdOnly = await prisma.sip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SipFindManyArgs>(args?: SelectSubset<T, SipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sip.
     * @param {SipCreateArgs} args - Arguments to create a Sip.
     * @example
     * // Create one Sip
     * const Sip = await prisma.sip.create({
     *   data: {
     *     // ... data to create a Sip
     *   }
     * })
     * 
     */
    create<T extends SipCreateArgs>(args: SelectSubset<T, SipCreateArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sips.
     * @param {SipCreateManyArgs} args - Arguments to create many Sips.
     * @example
     * // Create many Sips
     * const sip = await prisma.sip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SipCreateManyArgs>(args?: SelectSubset<T, SipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sips and returns the data saved in the database.
     * @param {SipCreateManyAndReturnArgs} args - Arguments to create many Sips.
     * @example
     * // Create many Sips
     * const sip = await prisma.sip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sips and only return the `id`
     * const sipWithIdOnly = await prisma.sip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SipCreateManyAndReturnArgs>(args?: SelectSubset<T, SipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sip.
     * @param {SipDeleteArgs} args - Arguments to delete one Sip.
     * @example
     * // Delete one Sip
     * const Sip = await prisma.sip.delete({
     *   where: {
     *     // ... filter to delete one Sip
     *   }
     * })
     * 
     */
    delete<T extends SipDeleteArgs>(args: SelectSubset<T, SipDeleteArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sip.
     * @param {SipUpdateArgs} args - Arguments to update one Sip.
     * @example
     * // Update one Sip
     * const sip = await prisma.sip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SipUpdateArgs>(args: SelectSubset<T, SipUpdateArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sips.
     * @param {SipDeleteManyArgs} args - Arguments to filter Sips to delete.
     * @example
     * // Delete a few Sips
     * const { count } = await prisma.sip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SipDeleteManyArgs>(args?: SelectSubset<T, SipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sips
     * const sip = await prisma.sip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SipUpdateManyArgs>(args: SelectSubset<T, SipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sips and returns the data updated in the database.
     * @param {SipUpdateManyAndReturnArgs} args - Arguments to update many Sips.
     * @example
     * // Update many Sips
     * const sip = await prisma.sip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sips and only return the `id`
     * const sipWithIdOnly = await prisma.sip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SipUpdateManyAndReturnArgs>(args: SelectSubset<T, SipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sip.
     * @param {SipUpsertArgs} args - Arguments to update or create a Sip.
     * @example
     * // Update or create a Sip
     * const sip = await prisma.sip.upsert({
     *   create: {
     *     // ... data to create a Sip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sip we want to update
     *   }
     * })
     */
    upsert<T extends SipUpsertArgs>(args: SelectSubset<T, SipUpsertArgs<ExtArgs>>): Prisma__SipClient<$Result.GetResult<Prisma.$SipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipCountArgs} args - Arguments to filter Sips to count.
     * @example
     * // Count the number of Sips
     * const count = await prisma.sip.count({
     *   where: {
     *     // ... the filter for the Sips we want to count
     *   }
     * })
    **/
    count<T extends SipCountArgs>(
      args?: Subset<T, SipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SipAggregateArgs>(args: Subset<T, SipAggregateArgs>): Prisma.PrismaPromise<GetSipAggregateType<T>>

    /**
     * Group by Sip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SipGroupByArgs['orderBy'] }
        : { orderBy?: SipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sip model
   */
  readonly fields: SipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fund<T extends FundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundDefaultArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sip model
   */
  interface SipFieldRefs {
    readonly id: FieldRef<"Sip", 'String'>
    readonly investorRef: FieldRef<"Sip", 'String'>
    readonly fundId: FieldRef<"Sip", 'String'>
    readonly amount: FieldRef<"Sip", 'Decimal'>
    readonly frequency: FieldRef<"Sip", 'SipFrequency'>
    readonly status: FieldRef<"Sip", 'SipStatus'>
    readonly startDate: FieldRef<"Sip", 'DateTime'>
    readonly nextDueDate: FieldRef<"Sip", 'DateTime'>
    readonly mandateId: FieldRef<"Sip", 'String'>
    readonly createdAt: FieldRef<"Sip", 'DateTime'>
    readonly updatedAt: FieldRef<"Sip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sip findUnique
   */
  export type SipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter, which Sip to fetch.
     */
    where: SipWhereUniqueInput
  }

  /**
   * Sip findUniqueOrThrow
   */
  export type SipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter, which Sip to fetch.
     */
    where: SipWhereUniqueInput
  }

  /**
   * Sip findFirst
   */
  export type SipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter, which Sip to fetch.
     */
    where?: SipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sips to fetch.
     */
    orderBy?: SipOrderByWithRelationInput | SipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sips.
     */
    cursor?: SipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sips.
     */
    distinct?: SipScalarFieldEnum | SipScalarFieldEnum[]
  }

  /**
   * Sip findFirstOrThrow
   */
  export type SipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter, which Sip to fetch.
     */
    where?: SipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sips to fetch.
     */
    orderBy?: SipOrderByWithRelationInput | SipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sips.
     */
    cursor?: SipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sips.
     */
    distinct?: SipScalarFieldEnum | SipScalarFieldEnum[]
  }

  /**
   * Sip findMany
   */
  export type SipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter, which Sips to fetch.
     */
    where?: SipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sips to fetch.
     */
    orderBy?: SipOrderByWithRelationInput | SipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sips.
     */
    cursor?: SipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sips.
     */
    skip?: number
    distinct?: SipScalarFieldEnum | SipScalarFieldEnum[]
  }

  /**
   * Sip create
   */
  export type SipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * The data needed to create a Sip.
     */
    data: XOR<SipCreateInput, SipUncheckedCreateInput>
  }

  /**
   * Sip createMany
   */
  export type SipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sips.
     */
    data: SipCreateManyInput | SipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sip createManyAndReturn
   */
  export type SipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * The data used to create many Sips.
     */
    data: SipCreateManyInput | SipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sip update
   */
  export type SipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * The data needed to update a Sip.
     */
    data: XOR<SipUpdateInput, SipUncheckedUpdateInput>
    /**
     * Choose, which Sip to update.
     */
    where: SipWhereUniqueInput
  }

  /**
   * Sip updateMany
   */
  export type SipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sips.
     */
    data: XOR<SipUpdateManyMutationInput, SipUncheckedUpdateManyInput>
    /**
     * Filter which Sips to update
     */
    where?: SipWhereInput
    /**
     * Limit how many Sips to update.
     */
    limit?: number
  }

  /**
   * Sip updateManyAndReturn
   */
  export type SipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * The data used to update Sips.
     */
    data: XOR<SipUpdateManyMutationInput, SipUncheckedUpdateManyInput>
    /**
     * Filter which Sips to update
     */
    where?: SipWhereInput
    /**
     * Limit how many Sips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sip upsert
   */
  export type SipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * The filter to search for the Sip to update in case it exists.
     */
    where: SipWhereUniqueInput
    /**
     * In case the Sip found by the `where` argument doesn't exist, create a new Sip with this data.
     */
    create: XOR<SipCreateInput, SipUncheckedCreateInput>
    /**
     * In case the Sip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SipUpdateInput, SipUncheckedUpdateInput>
  }

  /**
   * Sip delete
   */
  export type SipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
    /**
     * Filter which Sip to delete.
     */
    where: SipWhereUniqueInput
  }

  /**
   * Sip deleteMany
   */
  export type SipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sips to delete
     */
    where?: SipWhereInput
    /**
     * Limit how many Sips to delete.
     */
    limit?: number
  }

  /**
   * Sip without action
   */
  export type SipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sip
     */
    select?: SipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sip
     */
    omit?: SipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SipInclude<ExtArgs> | null
  }


  /**
   * Model MfTransaction
   */

  export type AggregateMfTransaction = {
    _count: MfTransactionCountAggregateOutputType | null
    _avg: MfTransactionAvgAggregateOutputType | null
    _sum: MfTransactionSumAggregateOutputType | null
    _min: MfTransactionMinAggregateOutputType | null
    _max: MfTransactionMaxAggregateOutputType | null
  }

  export type MfTransactionAvgAggregateOutputType = {
    units: Decimal | null
    nav: Decimal | null
    amount: Decimal | null
  }

  export type MfTransactionSumAggregateOutputType = {
    units: Decimal | null
    nav: Decimal | null
    amount: Decimal | null
  }

  export type MfTransactionMinAggregateOutputType = {
    id: string | null
    investorRef: string | null
    fundId: string | null
    type: $Enums.MfTransactionType | null
    units: Decimal | null
    nav: Decimal | null
    amount: Decimal | null
    executedAt: Date | null
    idempotencyKey: string | null
    createdAt: Date | null
  }

  export type MfTransactionMaxAggregateOutputType = {
    id: string | null
    investorRef: string | null
    fundId: string | null
    type: $Enums.MfTransactionType | null
    units: Decimal | null
    nav: Decimal | null
    amount: Decimal | null
    executedAt: Date | null
    idempotencyKey: string | null
    createdAt: Date | null
  }

  export type MfTransactionCountAggregateOutputType = {
    id: number
    investorRef: number
    fundId: number
    type: number
    units: number
    nav: number
    amount: number
    executedAt: number
    idempotencyKey: number
    createdAt: number
    _all: number
  }


  export type MfTransactionAvgAggregateInputType = {
    units?: true
    nav?: true
    amount?: true
  }

  export type MfTransactionSumAggregateInputType = {
    units?: true
    nav?: true
    amount?: true
  }

  export type MfTransactionMinAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    type?: true
    units?: true
    nav?: true
    amount?: true
    executedAt?: true
    idempotencyKey?: true
    createdAt?: true
  }

  export type MfTransactionMaxAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    type?: true
    units?: true
    nav?: true
    amount?: true
    executedAt?: true
    idempotencyKey?: true
    createdAt?: true
  }

  export type MfTransactionCountAggregateInputType = {
    id?: true
    investorRef?: true
    fundId?: true
    type?: true
    units?: true
    nav?: true
    amount?: true
    executedAt?: true
    idempotencyKey?: true
    createdAt?: true
    _all?: true
  }

  export type MfTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfTransaction to aggregate.
     */
    where?: MfTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfTransactions to fetch.
     */
    orderBy?: MfTransactionOrderByWithRelationInput | MfTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MfTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MfTransactions
    **/
    _count?: true | MfTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MfTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MfTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MfTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MfTransactionMaxAggregateInputType
  }

  export type GetMfTransactionAggregateType<T extends MfTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateMfTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMfTransaction[P]>
      : GetScalarType<T[P], AggregateMfTransaction[P]>
  }




  export type MfTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MfTransactionWhereInput
    orderBy?: MfTransactionOrderByWithAggregationInput | MfTransactionOrderByWithAggregationInput[]
    by: MfTransactionScalarFieldEnum[] | MfTransactionScalarFieldEnum
    having?: MfTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MfTransactionCountAggregateInputType | true
    _avg?: MfTransactionAvgAggregateInputType
    _sum?: MfTransactionSumAggregateInputType
    _min?: MfTransactionMinAggregateInputType
    _max?: MfTransactionMaxAggregateInputType
  }

  export type MfTransactionGroupByOutputType = {
    id: string
    investorRef: string
    fundId: string
    type: $Enums.MfTransactionType
    units: Decimal
    nav: Decimal
    amount: Decimal
    executedAt: Date
    idempotencyKey: string | null
    createdAt: Date
    _count: MfTransactionCountAggregateOutputType | null
    _avg: MfTransactionAvgAggregateOutputType | null
    _sum: MfTransactionSumAggregateOutputType | null
    _min: MfTransactionMinAggregateOutputType | null
    _max: MfTransactionMaxAggregateOutputType | null
  }

  type GetMfTransactionGroupByPayload<T extends MfTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MfTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MfTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MfTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], MfTransactionGroupByOutputType[P]>
        }
      >
    >


  export type MfTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    type?: boolean
    units?: boolean
    nav?: boolean
    amount?: boolean
    executedAt?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfTransaction"]>

  export type MfTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    type?: boolean
    units?: boolean
    nav?: boolean
    amount?: boolean
    executedAt?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfTransaction"]>

  export type MfTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    type?: boolean
    units?: boolean
    nav?: boolean
    amount?: boolean
    executedAt?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mfTransaction"]>

  export type MfTransactionSelectScalar = {
    id?: boolean
    investorRef?: boolean
    fundId?: boolean
    type?: boolean
    units?: boolean
    nav?: boolean
    amount?: boolean
    executedAt?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
  }

  export type MfTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "investorRef" | "fundId" | "type" | "units" | "nav" | "amount" | "executedAt" | "idempotencyKey" | "createdAt", ExtArgs["result"]["mfTransaction"]>
  export type MfTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type MfTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }
  export type MfTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fund?: boolean | FundDefaultArgs<ExtArgs>
  }

  export type $MfTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MfTransaction"
    objects: {
      fund: Prisma.$FundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      investorRef: string
      fundId: string
      type: $Enums.MfTransactionType
      units: Prisma.Decimal
      nav: Prisma.Decimal
      amount: Prisma.Decimal
      executedAt: Date
      idempotencyKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["mfTransaction"]>
    composites: {}
  }

  type MfTransactionGetPayload<S extends boolean | null | undefined | MfTransactionDefaultArgs> = $Result.GetResult<Prisma.$MfTransactionPayload, S>

  type MfTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MfTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MfTransactionCountAggregateInputType | true
    }

  export interface MfTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MfTransaction'], meta: { name: 'MfTransaction' } }
    /**
     * Find zero or one MfTransaction that matches the filter.
     * @param {MfTransactionFindUniqueArgs} args - Arguments to find a MfTransaction
     * @example
     * // Get one MfTransaction
     * const mfTransaction = await prisma.mfTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MfTransactionFindUniqueArgs>(args: SelectSubset<T, MfTransactionFindUniqueArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MfTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MfTransactionFindUniqueOrThrowArgs} args - Arguments to find a MfTransaction
     * @example
     * // Get one MfTransaction
     * const mfTransaction = await prisma.mfTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MfTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, MfTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionFindFirstArgs} args - Arguments to find a MfTransaction
     * @example
     * // Get one MfTransaction
     * const mfTransaction = await prisma.mfTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MfTransactionFindFirstArgs>(args?: SelectSubset<T, MfTransactionFindFirstArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MfTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionFindFirstOrThrowArgs} args - Arguments to find a MfTransaction
     * @example
     * // Get one MfTransaction
     * const mfTransaction = await prisma.mfTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MfTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, MfTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MfTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MfTransactions
     * const mfTransactions = await prisma.mfTransaction.findMany()
     * 
     * // Get first 10 MfTransactions
     * const mfTransactions = await prisma.mfTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mfTransactionWithIdOnly = await prisma.mfTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MfTransactionFindManyArgs>(args?: SelectSubset<T, MfTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MfTransaction.
     * @param {MfTransactionCreateArgs} args - Arguments to create a MfTransaction.
     * @example
     * // Create one MfTransaction
     * const MfTransaction = await prisma.mfTransaction.create({
     *   data: {
     *     // ... data to create a MfTransaction
     *   }
     * })
     * 
     */
    create<T extends MfTransactionCreateArgs>(args: SelectSubset<T, MfTransactionCreateArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MfTransactions.
     * @param {MfTransactionCreateManyArgs} args - Arguments to create many MfTransactions.
     * @example
     * // Create many MfTransactions
     * const mfTransaction = await prisma.mfTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MfTransactionCreateManyArgs>(args?: SelectSubset<T, MfTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MfTransactions and returns the data saved in the database.
     * @param {MfTransactionCreateManyAndReturnArgs} args - Arguments to create many MfTransactions.
     * @example
     * // Create many MfTransactions
     * const mfTransaction = await prisma.mfTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MfTransactions and only return the `id`
     * const mfTransactionWithIdOnly = await prisma.mfTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MfTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, MfTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MfTransaction.
     * @param {MfTransactionDeleteArgs} args - Arguments to delete one MfTransaction.
     * @example
     * // Delete one MfTransaction
     * const MfTransaction = await prisma.mfTransaction.delete({
     *   where: {
     *     // ... filter to delete one MfTransaction
     *   }
     * })
     * 
     */
    delete<T extends MfTransactionDeleteArgs>(args: SelectSubset<T, MfTransactionDeleteArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MfTransaction.
     * @param {MfTransactionUpdateArgs} args - Arguments to update one MfTransaction.
     * @example
     * // Update one MfTransaction
     * const mfTransaction = await prisma.mfTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MfTransactionUpdateArgs>(args: SelectSubset<T, MfTransactionUpdateArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MfTransactions.
     * @param {MfTransactionDeleteManyArgs} args - Arguments to filter MfTransactions to delete.
     * @example
     * // Delete a few MfTransactions
     * const { count } = await prisma.mfTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MfTransactionDeleteManyArgs>(args?: SelectSubset<T, MfTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MfTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MfTransactions
     * const mfTransaction = await prisma.mfTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MfTransactionUpdateManyArgs>(args: SelectSubset<T, MfTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MfTransactions and returns the data updated in the database.
     * @param {MfTransactionUpdateManyAndReturnArgs} args - Arguments to update many MfTransactions.
     * @example
     * // Update many MfTransactions
     * const mfTransaction = await prisma.mfTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MfTransactions and only return the `id`
     * const mfTransactionWithIdOnly = await prisma.mfTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MfTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, MfTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MfTransaction.
     * @param {MfTransactionUpsertArgs} args - Arguments to update or create a MfTransaction.
     * @example
     * // Update or create a MfTransaction
     * const mfTransaction = await prisma.mfTransaction.upsert({
     *   create: {
     *     // ... data to create a MfTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MfTransaction we want to update
     *   }
     * })
     */
    upsert<T extends MfTransactionUpsertArgs>(args: SelectSubset<T, MfTransactionUpsertArgs<ExtArgs>>): Prisma__MfTransactionClient<$Result.GetResult<Prisma.$MfTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MfTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionCountArgs} args - Arguments to filter MfTransactions to count.
     * @example
     * // Count the number of MfTransactions
     * const count = await prisma.mfTransaction.count({
     *   where: {
     *     // ... the filter for the MfTransactions we want to count
     *   }
     * })
    **/
    count<T extends MfTransactionCountArgs>(
      args?: Subset<T, MfTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MfTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MfTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MfTransactionAggregateArgs>(args: Subset<T, MfTransactionAggregateArgs>): Prisma.PrismaPromise<GetMfTransactionAggregateType<T>>

    /**
     * Group by MfTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MfTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MfTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MfTransactionGroupByArgs['orderBy'] }
        : { orderBy?: MfTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MfTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMfTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MfTransaction model
   */
  readonly fields: MfTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MfTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MfTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fund<T extends FundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FundDefaultArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MfTransaction model
   */
  interface MfTransactionFieldRefs {
    readonly id: FieldRef<"MfTransaction", 'String'>
    readonly investorRef: FieldRef<"MfTransaction", 'String'>
    readonly fundId: FieldRef<"MfTransaction", 'String'>
    readonly type: FieldRef<"MfTransaction", 'MfTransactionType'>
    readonly units: FieldRef<"MfTransaction", 'Decimal'>
    readonly nav: FieldRef<"MfTransaction", 'Decimal'>
    readonly amount: FieldRef<"MfTransaction", 'Decimal'>
    readonly executedAt: FieldRef<"MfTransaction", 'DateTime'>
    readonly idempotencyKey: FieldRef<"MfTransaction", 'String'>
    readonly createdAt: FieldRef<"MfTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MfTransaction findUnique
   */
  export type MfTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MfTransaction to fetch.
     */
    where: MfTransactionWhereUniqueInput
  }

  /**
   * MfTransaction findUniqueOrThrow
   */
  export type MfTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MfTransaction to fetch.
     */
    where: MfTransactionWhereUniqueInput
  }

  /**
   * MfTransaction findFirst
   */
  export type MfTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MfTransaction to fetch.
     */
    where?: MfTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfTransactions to fetch.
     */
    orderBy?: MfTransactionOrderByWithRelationInput | MfTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfTransactions.
     */
    cursor?: MfTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfTransactions.
     */
    distinct?: MfTransactionScalarFieldEnum | MfTransactionScalarFieldEnum[]
  }

  /**
   * MfTransaction findFirstOrThrow
   */
  export type MfTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MfTransaction to fetch.
     */
    where?: MfTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfTransactions to fetch.
     */
    orderBy?: MfTransactionOrderByWithRelationInput | MfTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MfTransactions.
     */
    cursor?: MfTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MfTransactions.
     */
    distinct?: MfTransactionScalarFieldEnum | MfTransactionScalarFieldEnum[]
  }

  /**
   * MfTransaction findMany
   */
  export type MfTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter, which MfTransactions to fetch.
     */
    where?: MfTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MfTransactions to fetch.
     */
    orderBy?: MfTransactionOrderByWithRelationInput | MfTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MfTransactions.
     */
    cursor?: MfTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MfTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MfTransactions.
     */
    skip?: number
    distinct?: MfTransactionScalarFieldEnum | MfTransactionScalarFieldEnum[]
  }

  /**
   * MfTransaction create
   */
  export type MfTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a MfTransaction.
     */
    data: XOR<MfTransactionCreateInput, MfTransactionUncheckedCreateInput>
  }

  /**
   * MfTransaction createMany
   */
  export type MfTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MfTransactions.
     */
    data: MfTransactionCreateManyInput | MfTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MfTransaction createManyAndReturn
   */
  export type MfTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many MfTransactions.
     */
    data: MfTransactionCreateManyInput | MfTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MfTransaction update
   */
  export type MfTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a MfTransaction.
     */
    data: XOR<MfTransactionUpdateInput, MfTransactionUncheckedUpdateInput>
    /**
     * Choose, which MfTransaction to update.
     */
    where: MfTransactionWhereUniqueInput
  }

  /**
   * MfTransaction updateMany
   */
  export type MfTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MfTransactions.
     */
    data: XOR<MfTransactionUpdateManyMutationInput, MfTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MfTransactions to update
     */
    where?: MfTransactionWhereInput
    /**
     * Limit how many MfTransactions to update.
     */
    limit?: number
  }

  /**
   * MfTransaction updateManyAndReturn
   */
  export type MfTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * The data used to update MfTransactions.
     */
    data: XOR<MfTransactionUpdateManyMutationInput, MfTransactionUncheckedUpdateManyInput>
    /**
     * Filter which MfTransactions to update
     */
    where?: MfTransactionWhereInput
    /**
     * Limit how many MfTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MfTransaction upsert
   */
  export type MfTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the MfTransaction to update in case it exists.
     */
    where: MfTransactionWhereUniqueInput
    /**
     * In case the MfTransaction found by the `where` argument doesn't exist, create a new MfTransaction with this data.
     */
    create: XOR<MfTransactionCreateInput, MfTransactionUncheckedCreateInput>
    /**
     * In case the MfTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MfTransactionUpdateInput, MfTransactionUncheckedUpdateInput>
  }

  /**
   * MfTransaction delete
   */
  export type MfTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
    /**
     * Filter which MfTransaction to delete.
     */
    where: MfTransactionWhereUniqueInput
  }

  /**
   * MfTransaction deleteMany
   */
  export type MfTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MfTransactions to delete
     */
    where?: MfTransactionWhereInput
    /**
     * Limit how many MfTransactions to delete.
     */
    limit?: number
  }

  /**
   * MfTransaction without action
   */
  export type MfTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MfTransaction
     */
    select?: MfTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MfTransaction
     */
    omit?: MfTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MfTransactionInclude<ExtArgs> | null
  }


  /**
   * Model ApiClient
   */

  export type AggregateApiClient = {
    _count: ApiClientCountAggregateOutputType | null
    _min: ApiClientMinAggregateOutputType | null
    _max: ApiClientMaxAggregateOutputType | null
  }

  export type ApiClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    secretHash: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ApiClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    secretHash: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type ApiClientCountAggregateOutputType = {
    id: number
    name: number
    apiKey: number
    secretHash: number
    active: number
    createdAt: number
    _all: number
  }


  export type ApiClientMinAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secretHash?: true
    active?: true
    createdAt?: true
  }

  export type ApiClientMaxAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secretHash?: true
    active?: true
    createdAt?: true
  }

  export type ApiClientCountAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secretHash?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type ApiClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiClient to aggregate.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiClients
    **/
    _count?: true | ApiClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiClientMaxAggregateInputType
  }

  export type GetApiClientAggregateType<T extends ApiClientAggregateArgs> = {
        [P in keyof T & keyof AggregateApiClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiClient[P]>
      : GetScalarType<T[P], AggregateApiClient[P]>
  }




  export type ApiClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiClientWhereInput
    orderBy?: ApiClientOrderByWithAggregationInput | ApiClientOrderByWithAggregationInput[]
    by: ApiClientScalarFieldEnum[] | ApiClientScalarFieldEnum
    having?: ApiClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiClientCountAggregateInputType | true
    _min?: ApiClientMinAggregateInputType
    _max?: ApiClientMaxAggregateInputType
  }

  export type ApiClientGroupByOutputType = {
    id: string
    name: string
    apiKey: string
    secretHash: string
    active: boolean
    createdAt: Date
    _count: ApiClientCountAggregateOutputType | null
    _min: ApiClientMinAggregateOutputType | null
    _max: ApiClientMaxAggregateOutputType | null
  }

  type GetApiClientGroupByPayload<T extends ApiClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiClientGroupByOutputType[P]>
            : GetScalarType<T[P], ApiClientGroupByOutputType[P]>
        }
      >
    >


  export type ApiClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secretHash?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secretHash?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secretHash?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["apiClient"]>

  export type ApiClientSelectScalar = {
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secretHash?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type ApiClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiKey" | "secretHash" | "active" | "createdAt", ExtArgs["result"]["apiClient"]>

  export type $ApiClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiClient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiKey: string
      secretHash: string
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["apiClient"]>
    composites: {}
  }

  type ApiClientGetPayload<S extends boolean | null | undefined | ApiClientDefaultArgs> = $Result.GetResult<Prisma.$ApiClientPayload, S>

  type ApiClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiClientCountAggregateInputType | true
    }

  export interface ApiClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiClient'], meta: { name: 'ApiClient' } }
    /**
     * Find zero or one ApiClient that matches the filter.
     * @param {ApiClientFindUniqueArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiClientFindUniqueArgs>(args: SelectSubset<T, ApiClientFindUniqueArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiClientFindUniqueOrThrowArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindFirstArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiClientFindFirstArgs>(args?: SelectSubset<T, ApiClientFindFirstArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindFirstOrThrowArgs} args - Arguments to find a ApiClient
     * @example
     * // Get one ApiClient
     * const apiClient = await prisma.apiClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiClients
     * const apiClients = await prisma.apiClient.findMany()
     * 
     * // Get first 10 ApiClients
     * const apiClients = await prisma.apiClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiClientFindManyArgs>(args?: SelectSubset<T, ApiClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiClient.
     * @param {ApiClientCreateArgs} args - Arguments to create a ApiClient.
     * @example
     * // Create one ApiClient
     * const ApiClient = await prisma.apiClient.create({
     *   data: {
     *     // ... data to create a ApiClient
     *   }
     * })
     * 
     */
    create<T extends ApiClientCreateArgs>(args: SelectSubset<T, ApiClientCreateArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiClients.
     * @param {ApiClientCreateManyArgs} args - Arguments to create many ApiClients.
     * @example
     * // Create many ApiClients
     * const apiClient = await prisma.apiClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiClientCreateManyArgs>(args?: SelectSubset<T, ApiClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiClients and returns the data saved in the database.
     * @param {ApiClientCreateManyAndReturnArgs} args - Arguments to create many ApiClients.
     * @example
     * // Create many ApiClients
     * const apiClient = await prisma.apiClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiClients and only return the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiClient.
     * @param {ApiClientDeleteArgs} args - Arguments to delete one ApiClient.
     * @example
     * // Delete one ApiClient
     * const ApiClient = await prisma.apiClient.delete({
     *   where: {
     *     // ... filter to delete one ApiClient
     *   }
     * })
     * 
     */
    delete<T extends ApiClientDeleteArgs>(args: SelectSubset<T, ApiClientDeleteArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiClient.
     * @param {ApiClientUpdateArgs} args - Arguments to update one ApiClient.
     * @example
     * // Update one ApiClient
     * const apiClient = await prisma.apiClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiClientUpdateArgs>(args: SelectSubset<T, ApiClientUpdateArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiClients.
     * @param {ApiClientDeleteManyArgs} args - Arguments to filter ApiClients to delete.
     * @example
     * // Delete a few ApiClients
     * const { count } = await prisma.apiClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiClientDeleteManyArgs>(args?: SelectSubset<T, ApiClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiClients
     * const apiClient = await prisma.apiClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiClientUpdateManyArgs>(args: SelectSubset<T, ApiClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiClients and returns the data updated in the database.
     * @param {ApiClientUpdateManyAndReturnArgs} args - Arguments to update many ApiClients.
     * @example
     * // Update many ApiClients
     * const apiClient = await prisma.apiClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiClients and only return the `id`
     * const apiClientWithIdOnly = await prisma.apiClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiClient.
     * @param {ApiClientUpsertArgs} args - Arguments to update or create a ApiClient.
     * @example
     * // Update or create a ApiClient
     * const apiClient = await prisma.apiClient.upsert({
     *   create: {
     *     // ... data to create a ApiClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiClient we want to update
     *   }
     * })
     */
    upsert<T extends ApiClientUpsertArgs>(args: SelectSubset<T, ApiClientUpsertArgs<ExtArgs>>): Prisma__ApiClientClient<$Result.GetResult<Prisma.$ApiClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientCountArgs} args - Arguments to filter ApiClients to count.
     * @example
     * // Count the number of ApiClients
     * const count = await prisma.apiClient.count({
     *   where: {
     *     // ... the filter for the ApiClients we want to count
     *   }
     * })
    **/
    count<T extends ApiClientCountArgs>(
      args?: Subset<T, ApiClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiClientAggregateArgs>(args: Subset<T, ApiClientAggregateArgs>): Prisma.PrismaPromise<GetApiClientAggregateType<T>>

    /**
     * Group by ApiClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiClientGroupByArgs['orderBy'] }
        : { orderBy?: ApiClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiClient model
   */
  readonly fields: ApiClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiClient model
   */
  interface ApiClientFieldRefs {
    readonly id: FieldRef<"ApiClient", 'String'>
    readonly name: FieldRef<"ApiClient", 'String'>
    readonly apiKey: FieldRef<"ApiClient", 'String'>
    readonly secretHash: FieldRef<"ApiClient", 'String'>
    readonly active: FieldRef<"ApiClient", 'Boolean'>
    readonly createdAt: FieldRef<"ApiClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiClient findUnique
   */
  export type ApiClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient findUniqueOrThrow
   */
  export type ApiClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient findFirst
   */
  export type ApiClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiClients.
     */
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient findFirstOrThrow
   */
  export type ApiClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter, which ApiClient to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiClients.
     */
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient findMany
   */
  export type ApiClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter, which ApiClients to fetch.
     */
    where?: ApiClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiClients to fetch.
     */
    orderBy?: ApiClientOrderByWithRelationInput | ApiClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiClients.
     */
    cursor?: ApiClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiClients.
     */
    skip?: number
    distinct?: ApiClientScalarFieldEnum | ApiClientScalarFieldEnum[]
  }

  /**
   * ApiClient create
   */
  export type ApiClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data needed to create a ApiClient.
     */
    data: XOR<ApiClientCreateInput, ApiClientUncheckedCreateInput>
  }

  /**
   * ApiClient createMany
   */
  export type ApiClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiClients.
     */
    data: ApiClientCreateManyInput | ApiClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiClient createManyAndReturn
   */
  export type ApiClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data used to create many ApiClients.
     */
    data: ApiClientCreateManyInput | ApiClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiClient update
   */
  export type ApiClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data needed to update a ApiClient.
     */
    data: XOR<ApiClientUpdateInput, ApiClientUncheckedUpdateInput>
    /**
     * Choose, which ApiClient to update.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient updateMany
   */
  export type ApiClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiClients.
     */
    data: XOR<ApiClientUpdateManyMutationInput, ApiClientUncheckedUpdateManyInput>
    /**
     * Filter which ApiClients to update
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to update.
     */
    limit?: number
  }

  /**
   * ApiClient updateManyAndReturn
   */
  export type ApiClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The data used to update ApiClients.
     */
    data: XOR<ApiClientUpdateManyMutationInput, ApiClientUncheckedUpdateManyInput>
    /**
     * Filter which ApiClients to update
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to update.
     */
    limit?: number
  }

  /**
   * ApiClient upsert
   */
  export type ApiClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * The filter to search for the ApiClient to update in case it exists.
     */
    where: ApiClientWhereUniqueInput
    /**
     * In case the ApiClient found by the `where` argument doesn't exist, create a new ApiClient with this data.
     */
    create: XOR<ApiClientCreateInput, ApiClientUncheckedCreateInput>
    /**
     * In case the ApiClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiClientUpdateInput, ApiClientUncheckedUpdateInput>
  }

  /**
   * ApiClient delete
   */
  export type ApiClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
    /**
     * Filter which ApiClient to delete.
     */
    where: ApiClientWhereUniqueInput
  }

  /**
   * ApiClient deleteMany
   */
  export type ApiClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiClients to delete
     */
    where?: ApiClientWhereInput
    /**
     * Limit how many ApiClients to delete.
     */
    limit?: number
  }

  /**
   * ApiClient without action
   */
  export type ApiClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiClient
     */
    select?: ApiClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiClient
     */
    omit?: ApiClientOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FundScalarFieldEnum: {
    id: 'id',
    schemeCode: 'schemeCode',
    name: 'name',
    category: 'category',
    amc: 'amc',
    riskLevel: 'riskLevel',
    createdAt: 'createdAt'
  };

  export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum]


  export const NavHistoryScalarFieldEnum: {
    id: 'id',
    fundId: 'fundId',
    nav: 'nav',
    navDate: 'navDate',
    createdAt: 'createdAt'
  };

  export type NavHistoryScalarFieldEnum = (typeof NavHistoryScalarFieldEnum)[keyof typeof NavHistoryScalarFieldEnum]


  export const SipScalarFieldEnum: {
    id: 'id',
    investorRef: 'investorRef',
    fundId: 'fundId',
    amount: 'amount',
    frequency: 'frequency',
    status: 'status',
    startDate: 'startDate',
    nextDueDate: 'nextDueDate',
    mandateId: 'mandateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SipScalarFieldEnum = (typeof SipScalarFieldEnum)[keyof typeof SipScalarFieldEnum]


  export const MfTransactionScalarFieldEnum: {
    id: 'id',
    investorRef: 'investorRef',
    fundId: 'fundId',
    type: 'type',
    units: 'units',
    nav: 'nav',
    amount: 'amount',
    executedAt: 'executedAt',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt'
  };

  export type MfTransactionScalarFieldEnum = (typeof MfTransactionScalarFieldEnum)[keyof typeof MfTransactionScalarFieldEnum]


  export const ApiClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiKey: 'apiKey',
    secretHash: 'secretHash',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type ApiClientScalarFieldEnum = (typeof ApiClientScalarFieldEnum)[keyof typeof ApiClientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SipFrequency'
   */
  export type EnumSipFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SipFrequency'>
    


  /**
   * Reference to a field of type 'SipFrequency[]'
   */
  export type ListEnumSipFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SipFrequency[]'>
    


  /**
   * Reference to a field of type 'SipStatus'
   */
  export type EnumSipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SipStatus'>
    


  /**
   * Reference to a field of type 'SipStatus[]'
   */
  export type ListEnumSipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SipStatus[]'>
    


  /**
   * Reference to a field of type 'MfTransactionType'
   */
  export type EnumMfTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MfTransactionType'>
    


  /**
   * Reference to a field of type 'MfTransactionType[]'
   */
  export type ListEnumMfTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MfTransactionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FundWhereInput = {
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    id?: UuidFilter<"Fund"> | string
    schemeCode?: StringFilter<"Fund"> | string
    name?: StringFilter<"Fund"> | string
    category?: StringFilter<"Fund"> | string
    amc?: StringFilter<"Fund"> | string
    riskLevel?: StringFilter<"Fund"> | string
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    navHistory?: NavHistoryListRelationFilter
    sips?: SipListRelationFilter
    transactions?: MfTransactionListRelationFilter
  }

  export type FundOrderByWithRelationInput = {
    id?: SortOrder
    schemeCode?: SortOrder
    name?: SortOrder
    category?: SortOrder
    amc?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
    navHistory?: NavHistoryOrderByRelationAggregateInput
    sips?: SipOrderByRelationAggregateInput
    transactions?: MfTransactionOrderByRelationAggregateInput
  }

  export type FundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schemeCode?: string
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    name?: StringFilter<"Fund"> | string
    category?: StringFilter<"Fund"> | string
    amc?: StringFilter<"Fund"> | string
    riskLevel?: StringFilter<"Fund"> | string
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    navHistory?: NavHistoryListRelationFilter
    sips?: SipListRelationFilter
    transactions?: MfTransactionListRelationFilter
  }, "id" | "schemeCode">

  export type FundOrderByWithAggregationInput = {
    id?: SortOrder
    schemeCode?: SortOrder
    name?: SortOrder
    category?: SortOrder
    amc?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
    _count?: FundCountOrderByAggregateInput
    _max?: FundMaxOrderByAggregateInput
    _min?: FundMinOrderByAggregateInput
  }

  export type FundScalarWhereWithAggregatesInput = {
    AND?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    OR?: FundScalarWhereWithAggregatesInput[]
    NOT?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Fund"> | string
    schemeCode?: StringWithAggregatesFilter<"Fund"> | string
    name?: StringWithAggregatesFilter<"Fund"> | string
    category?: StringWithAggregatesFilter<"Fund"> | string
    amc?: StringWithAggregatesFilter<"Fund"> | string
    riskLevel?: StringWithAggregatesFilter<"Fund"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
  }

  export type NavHistoryWhereInput = {
    AND?: NavHistoryWhereInput | NavHistoryWhereInput[]
    OR?: NavHistoryWhereInput[]
    NOT?: NavHistoryWhereInput | NavHistoryWhereInput[]
    id?: UuidFilter<"NavHistory"> | string
    fundId?: UuidFilter<"NavHistory"> | string
    nav?: DecimalFilter<"NavHistory"> | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFilter<"NavHistory"> | Date | string
    createdAt?: DateTimeFilter<"NavHistory"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }

  export type NavHistoryOrderByWithRelationInput = {
    id?: SortOrder
    fundId?: SortOrder
    nav?: SortOrder
    navDate?: SortOrder
    createdAt?: SortOrder
    fund?: FundOrderByWithRelationInput
  }

  export type NavHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fundId_navDate?: NavHistoryFundIdNavDateCompoundUniqueInput
    AND?: NavHistoryWhereInput | NavHistoryWhereInput[]
    OR?: NavHistoryWhereInput[]
    NOT?: NavHistoryWhereInput | NavHistoryWhereInput[]
    fundId?: UuidFilter<"NavHistory"> | string
    nav?: DecimalFilter<"NavHistory"> | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFilter<"NavHistory"> | Date | string
    createdAt?: DateTimeFilter<"NavHistory"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }, "id" | "fundId_navDate">

  export type NavHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    fundId?: SortOrder
    nav?: SortOrder
    navDate?: SortOrder
    createdAt?: SortOrder
    _count?: NavHistoryCountOrderByAggregateInput
    _avg?: NavHistoryAvgOrderByAggregateInput
    _max?: NavHistoryMaxOrderByAggregateInput
    _min?: NavHistoryMinOrderByAggregateInput
    _sum?: NavHistorySumOrderByAggregateInput
  }

  export type NavHistoryScalarWhereWithAggregatesInput = {
    AND?: NavHistoryScalarWhereWithAggregatesInput | NavHistoryScalarWhereWithAggregatesInput[]
    OR?: NavHistoryScalarWhereWithAggregatesInput[]
    NOT?: NavHistoryScalarWhereWithAggregatesInput | NavHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NavHistory"> | string
    fundId?: UuidWithAggregatesFilter<"NavHistory"> | string
    nav?: DecimalWithAggregatesFilter<"NavHistory"> | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeWithAggregatesFilter<"NavHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"NavHistory"> | Date | string
  }

  export type SipWhereInput = {
    AND?: SipWhereInput | SipWhereInput[]
    OR?: SipWhereInput[]
    NOT?: SipWhereInput | SipWhereInput[]
    id?: UuidFilter<"Sip"> | string
    investorRef?: StringFilter<"Sip"> | string
    fundId?: UuidFilter<"Sip"> | string
    amount?: DecimalFilter<"Sip"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFilter<"Sip"> | $Enums.SipFrequency
    status?: EnumSipStatusFilter<"Sip"> | $Enums.SipStatus
    startDate?: DateTimeFilter<"Sip"> | Date | string
    nextDueDate?: DateTimeNullableFilter<"Sip"> | Date | string | null
    mandateId?: StringNullableFilter<"Sip"> | string | null
    createdAt?: DateTimeFilter<"Sip"> | Date | string
    updatedAt?: DateTimeFilter<"Sip"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }

  export type SipOrderByWithRelationInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    mandateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fund?: FundOrderByWithRelationInput
  }

  export type SipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SipWhereInput | SipWhereInput[]
    OR?: SipWhereInput[]
    NOT?: SipWhereInput | SipWhereInput[]
    investorRef?: StringFilter<"Sip"> | string
    fundId?: UuidFilter<"Sip"> | string
    amount?: DecimalFilter<"Sip"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFilter<"Sip"> | $Enums.SipFrequency
    status?: EnumSipStatusFilter<"Sip"> | $Enums.SipStatus
    startDate?: DateTimeFilter<"Sip"> | Date | string
    nextDueDate?: DateTimeNullableFilter<"Sip"> | Date | string | null
    mandateId?: StringNullableFilter<"Sip"> | string | null
    createdAt?: DateTimeFilter<"Sip"> | Date | string
    updatedAt?: DateTimeFilter<"Sip"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }, "id">

  export type SipOrderByWithAggregationInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    nextDueDate?: SortOrderInput | SortOrder
    mandateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SipCountOrderByAggregateInput
    _avg?: SipAvgOrderByAggregateInput
    _max?: SipMaxOrderByAggregateInput
    _min?: SipMinOrderByAggregateInput
    _sum?: SipSumOrderByAggregateInput
  }

  export type SipScalarWhereWithAggregatesInput = {
    AND?: SipScalarWhereWithAggregatesInput | SipScalarWhereWithAggregatesInput[]
    OR?: SipScalarWhereWithAggregatesInput[]
    NOT?: SipScalarWhereWithAggregatesInput | SipScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Sip"> | string
    investorRef?: StringWithAggregatesFilter<"Sip"> | string
    fundId?: UuidWithAggregatesFilter<"Sip"> | string
    amount?: DecimalWithAggregatesFilter<"Sip"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyWithAggregatesFilter<"Sip"> | $Enums.SipFrequency
    status?: EnumSipStatusWithAggregatesFilter<"Sip"> | $Enums.SipStatus
    startDate?: DateTimeWithAggregatesFilter<"Sip"> | Date | string
    nextDueDate?: DateTimeNullableWithAggregatesFilter<"Sip"> | Date | string | null
    mandateId?: StringNullableWithAggregatesFilter<"Sip"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sip"> | Date | string
  }

  export type MfTransactionWhereInput = {
    AND?: MfTransactionWhereInput | MfTransactionWhereInput[]
    OR?: MfTransactionWhereInput[]
    NOT?: MfTransactionWhereInput | MfTransactionWhereInput[]
    id?: UuidFilter<"MfTransaction"> | string
    investorRef?: StringFilter<"MfTransaction"> | string
    fundId?: UuidFilter<"MfTransaction"> | string
    type?: EnumMfTransactionTypeFilter<"MfTransaction"> | $Enums.MfTransactionType
    units?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    nav?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFilter<"MfTransaction"> | Date | string
    idempotencyKey?: StringNullableFilter<"MfTransaction"> | string | null
    createdAt?: DateTimeFilter<"MfTransaction"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }

  export type MfTransactionOrderByWithRelationInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    type?: SortOrder
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    fund?: FundOrderByWithRelationInput
  }

  export type MfTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: MfTransactionWhereInput | MfTransactionWhereInput[]
    OR?: MfTransactionWhereInput[]
    NOT?: MfTransactionWhereInput | MfTransactionWhereInput[]
    investorRef?: StringFilter<"MfTransaction"> | string
    fundId?: UuidFilter<"MfTransaction"> | string
    type?: EnumMfTransactionTypeFilter<"MfTransaction"> | $Enums.MfTransactionType
    units?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    nav?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFilter<"MfTransaction"> | Date | string
    createdAt?: DateTimeFilter<"MfTransaction"> | Date | string
    fund?: XOR<FundScalarRelationFilter, FundWhereInput>
  }, "id" | "idempotencyKey">

  export type MfTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    type?: SortOrder
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MfTransactionCountOrderByAggregateInput
    _avg?: MfTransactionAvgOrderByAggregateInput
    _max?: MfTransactionMaxOrderByAggregateInput
    _min?: MfTransactionMinOrderByAggregateInput
    _sum?: MfTransactionSumOrderByAggregateInput
  }

  export type MfTransactionScalarWhereWithAggregatesInput = {
    AND?: MfTransactionScalarWhereWithAggregatesInput | MfTransactionScalarWhereWithAggregatesInput[]
    OR?: MfTransactionScalarWhereWithAggregatesInput[]
    NOT?: MfTransactionScalarWhereWithAggregatesInput | MfTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MfTransaction"> | string
    investorRef?: StringWithAggregatesFilter<"MfTransaction"> | string
    fundId?: UuidWithAggregatesFilter<"MfTransaction"> | string
    type?: EnumMfTransactionTypeWithAggregatesFilter<"MfTransaction"> | $Enums.MfTransactionType
    units?: DecimalWithAggregatesFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    nav?: DecimalWithAggregatesFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeWithAggregatesFilter<"MfTransaction"> | Date | string
    idempotencyKey?: StringNullableWithAggregatesFilter<"MfTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MfTransaction"> | Date | string
  }

  export type ApiClientWhereInput = {
    AND?: ApiClientWhereInput | ApiClientWhereInput[]
    OR?: ApiClientWhereInput[]
    NOT?: ApiClientWhereInput | ApiClientWhereInput[]
    id?: UuidFilter<"ApiClient"> | string
    name?: StringFilter<"ApiClient"> | string
    apiKey?: StringFilter<"ApiClient"> | string
    secretHash?: StringFilter<"ApiClient"> | string
    active?: BoolFilter<"ApiClient"> | boolean
    createdAt?: DateTimeFilter<"ApiClient"> | Date | string
  }

  export type ApiClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secretHash?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKey?: string
    AND?: ApiClientWhereInput | ApiClientWhereInput[]
    OR?: ApiClientWhereInput[]
    NOT?: ApiClientWhereInput | ApiClientWhereInput[]
    name?: StringFilter<"ApiClient"> | string
    secretHash?: StringFilter<"ApiClient"> | string
    active?: BoolFilter<"ApiClient"> | boolean
    createdAt?: DateTimeFilter<"ApiClient"> | Date | string
  }, "id" | "apiKey">

  export type ApiClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secretHash?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: ApiClientCountOrderByAggregateInput
    _max?: ApiClientMaxOrderByAggregateInput
    _min?: ApiClientMinOrderByAggregateInput
  }

  export type ApiClientScalarWhereWithAggregatesInput = {
    AND?: ApiClientScalarWhereWithAggregatesInput | ApiClientScalarWhereWithAggregatesInput[]
    OR?: ApiClientScalarWhereWithAggregatesInput[]
    NOT?: ApiClientScalarWhereWithAggregatesInput | ApiClientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ApiClient"> | string
    name?: StringWithAggregatesFilter<"ApiClient"> | string
    apiKey?: StringWithAggregatesFilter<"ApiClient"> | string
    secretHash?: StringWithAggregatesFilter<"ApiClient"> | string
    active?: BoolWithAggregatesFilter<"ApiClient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiClient"> | Date | string
  }

  export type FundCreateInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryCreateNestedManyWithoutFundInput
    sips?: SipCreateNestedManyWithoutFundInput
    transactions?: MfTransactionCreateNestedManyWithoutFundInput
  }

  export type FundUncheckedCreateInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryUncheckedCreateNestedManyWithoutFundInput
    sips?: SipUncheckedCreateNestedManyWithoutFundInput
    transactions?: MfTransactionUncheckedCreateNestedManyWithoutFundInput
  }

  export type FundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUpdateManyWithoutFundNestedInput
    sips?: SipUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUpdateManyWithoutFundNestedInput
  }

  export type FundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUncheckedUpdateManyWithoutFundNestedInput
    sips?: SipUncheckedUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUncheckedUpdateManyWithoutFundNestedInput
  }

  export type FundCreateManyInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
  }

  export type FundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavHistoryCreateInput = {
    id?: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
    fund: FundCreateNestedOneWithoutNavHistoryInput
  }

  export type NavHistoryUncheckedCreateInput = {
    id?: string
    fundId: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
  }

  export type NavHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fund?: FundUpdateOneRequiredWithoutNavHistoryNestedInput
  }

  export type NavHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavHistoryCreateManyInput = {
    id?: string
    fundId: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
  }

  export type NavHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipCreateInput = {
    id?: string
    investorRef: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fund: FundCreateNestedOneWithoutSipsInput
  }

  export type SipUncheckedCreateInput = {
    id?: string
    investorRef: string
    fundId: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fund?: FundUpdateOneRequiredWithoutSipsNestedInput
  }

  export type SipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipCreateManyInput = {
    id?: string
    investorRef: string
    fundId: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionCreateInput = {
    id?: string
    investorRef: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
    fund: FundCreateNestedOneWithoutTransactionsInput
  }

  export type MfTransactionUncheckedCreateInput = {
    id?: string
    investorRef: string
    fundId: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
  }

  export type MfTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fund?: FundUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type MfTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionCreateManyInput = {
    id?: string
    investorRef: string
    fundId: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
  }

  export type MfTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    fundId?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientCreateInput = {
    id?: string
    name: string
    apiKey: string
    secretHash: string
    active?: boolean
    createdAt?: Date | string
  }

  export type ApiClientUncheckedCreateInput = {
    id?: string
    name: string
    apiKey: string
    secretHash: string
    active?: boolean
    createdAt?: Date | string
  }

  export type ApiClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientCreateManyInput = {
    id?: string
    name: string
    apiKey: string
    secretHash: string
    active?: boolean
    createdAt?: Date | string
  }

  export type ApiClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secretHash?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NavHistoryListRelationFilter = {
    every?: NavHistoryWhereInput
    some?: NavHistoryWhereInput
    none?: NavHistoryWhereInput
  }

  export type SipListRelationFilter = {
    every?: SipWhereInput
    some?: SipWhereInput
    none?: SipWhereInput
  }

  export type MfTransactionListRelationFilter = {
    every?: MfTransactionWhereInput
    some?: MfTransactionWhereInput
    none?: MfTransactionWhereInput
  }

  export type NavHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MfTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundCountOrderByAggregateInput = {
    id?: SortOrder
    schemeCode?: SortOrder
    name?: SortOrder
    category?: SortOrder
    amc?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type FundMaxOrderByAggregateInput = {
    id?: SortOrder
    schemeCode?: SortOrder
    name?: SortOrder
    category?: SortOrder
    amc?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type FundMinOrderByAggregateInput = {
    id?: SortOrder
    schemeCode?: SortOrder
    name?: SortOrder
    category?: SortOrder
    amc?: SortOrder
    riskLevel?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FundScalarRelationFilter = {
    is?: FundWhereInput
    isNot?: FundWhereInput
  }

  export type NavHistoryFundIdNavDateCompoundUniqueInput = {
    fundId: string
    navDate: Date | string
  }

  export type NavHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    nav?: SortOrder
    navDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NavHistoryAvgOrderByAggregateInput = {
    nav?: SortOrder
  }

  export type NavHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    nav?: SortOrder
    navDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NavHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    fundId?: SortOrder
    nav?: SortOrder
    navDate?: SortOrder
    createdAt?: SortOrder
  }

  export type NavHistorySumOrderByAggregateInput = {
    nav?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSipFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.SipFrequency | EnumSipFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSipFrequencyFilter<$PrismaModel> | $Enums.SipFrequency
  }

  export type EnumSipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SipStatus | EnumSipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSipStatusFilter<$PrismaModel> | $Enums.SipStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SipCountOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    nextDueDate?: SortOrder
    mandateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SipAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SipMaxOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    nextDueDate?: SortOrder
    mandateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SipMinOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    nextDueDate?: SortOrder
    mandateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SipSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumSipFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SipFrequency | EnumSipFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSipFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.SipFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSipFrequencyFilter<$PrismaModel>
    _max?: NestedEnumSipFrequencyFilter<$PrismaModel>
  }

  export type EnumSipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SipStatus | EnumSipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSipStatusWithAggregatesFilter<$PrismaModel> | $Enums.SipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSipStatusFilter<$PrismaModel>
    _max?: NestedEnumSipStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMfTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MfTransactionType | EnumMfTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMfTransactionTypeFilter<$PrismaModel> | $Enums.MfTransactionType
  }

  export type MfTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    type?: SortOrder
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MfTransactionAvgOrderByAggregateInput = {
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
  }

  export type MfTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    type?: SortOrder
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MfTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    investorRef?: SortOrder
    fundId?: SortOrder
    type?: SortOrder
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
    executedAt?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
  }

  export type MfTransactionSumOrderByAggregateInput = {
    units?: SortOrder
    nav?: SortOrder
    amount?: SortOrder
  }

  export type EnumMfTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MfTransactionType | EnumMfTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMfTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MfTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMfTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumMfTransactionTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApiClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secretHash?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secretHash?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secretHash?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NavHistoryCreateNestedManyWithoutFundInput = {
    create?: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput> | NavHistoryCreateWithoutFundInput[] | NavHistoryUncheckedCreateWithoutFundInput[]
    connectOrCreate?: NavHistoryCreateOrConnectWithoutFundInput | NavHistoryCreateOrConnectWithoutFundInput[]
    createMany?: NavHistoryCreateManyFundInputEnvelope
    connect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
  }

  export type SipCreateNestedManyWithoutFundInput = {
    create?: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput> | SipCreateWithoutFundInput[] | SipUncheckedCreateWithoutFundInput[]
    connectOrCreate?: SipCreateOrConnectWithoutFundInput | SipCreateOrConnectWithoutFundInput[]
    createMany?: SipCreateManyFundInputEnvelope
    connect?: SipWhereUniqueInput | SipWhereUniqueInput[]
  }

  export type MfTransactionCreateNestedManyWithoutFundInput = {
    create?: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput> | MfTransactionCreateWithoutFundInput[] | MfTransactionUncheckedCreateWithoutFundInput[]
    connectOrCreate?: MfTransactionCreateOrConnectWithoutFundInput | MfTransactionCreateOrConnectWithoutFundInput[]
    createMany?: MfTransactionCreateManyFundInputEnvelope
    connect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
  }

  export type NavHistoryUncheckedCreateNestedManyWithoutFundInput = {
    create?: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput> | NavHistoryCreateWithoutFundInput[] | NavHistoryUncheckedCreateWithoutFundInput[]
    connectOrCreate?: NavHistoryCreateOrConnectWithoutFundInput | NavHistoryCreateOrConnectWithoutFundInput[]
    createMany?: NavHistoryCreateManyFundInputEnvelope
    connect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
  }

  export type SipUncheckedCreateNestedManyWithoutFundInput = {
    create?: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput> | SipCreateWithoutFundInput[] | SipUncheckedCreateWithoutFundInput[]
    connectOrCreate?: SipCreateOrConnectWithoutFundInput | SipCreateOrConnectWithoutFundInput[]
    createMany?: SipCreateManyFundInputEnvelope
    connect?: SipWhereUniqueInput | SipWhereUniqueInput[]
  }

  export type MfTransactionUncheckedCreateNestedManyWithoutFundInput = {
    create?: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput> | MfTransactionCreateWithoutFundInput[] | MfTransactionUncheckedCreateWithoutFundInput[]
    connectOrCreate?: MfTransactionCreateOrConnectWithoutFundInput | MfTransactionCreateOrConnectWithoutFundInput[]
    createMany?: MfTransactionCreateManyFundInputEnvelope
    connect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NavHistoryUpdateManyWithoutFundNestedInput = {
    create?: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput> | NavHistoryCreateWithoutFundInput[] | NavHistoryUncheckedCreateWithoutFundInput[]
    connectOrCreate?: NavHistoryCreateOrConnectWithoutFundInput | NavHistoryCreateOrConnectWithoutFundInput[]
    upsert?: NavHistoryUpsertWithWhereUniqueWithoutFundInput | NavHistoryUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: NavHistoryCreateManyFundInputEnvelope
    set?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    disconnect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    delete?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    connect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    update?: NavHistoryUpdateWithWhereUniqueWithoutFundInput | NavHistoryUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: NavHistoryUpdateManyWithWhereWithoutFundInput | NavHistoryUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: NavHistoryScalarWhereInput | NavHistoryScalarWhereInput[]
  }

  export type SipUpdateManyWithoutFundNestedInput = {
    create?: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput> | SipCreateWithoutFundInput[] | SipUncheckedCreateWithoutFundInput[]
    connectOrCreate?: SipCreateOrConnectWithoutFundInput | SipCreateOrConnectWithoutFundInput[]
    upsert?: SipUpsertWithWhereUniqueWithoutFundInput | SipUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: SipCreateManyFundInputEnvelope
    set?: SipWhereUniqueInput | SipWhereUniqueInput[]
    disconnect?: SipWhereUniqueInput | SipWhereUniqueInput[]
    delete?: SipWhereUniqueInput | SipWhereUniqueInput[]
    connect?: SipWhereUniqueInput | SipWhereUniqueInput[]
    update?: SipUpdateWithWhereUniqueWithoutFundInput | SipUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: SipUpdateManyWithWhereWithoutFundInput | SipUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: SipScalarWhereInput | SipScalarWhereInput[]
  }

  export type MfTransactionUpdateManyWithoutFundNestedInput = {
    create?: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput> | MfTransactionCreateWithoutFundInput[] | MfTransactionUncheckedCreateWithoutFundInput[]
    connectOrCreate?: MfTransactionCreateOrConnectWithoutFundInput | MfTransactionCreateOrConnectWithoutFundInput[]
    upsert?: MfTransactionUpsertWithWhereUniqueWithoutFundInput | MfTransactionUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: MfTransactionCreateManyFundInputEnvelope
    set?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    disconnect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    delete?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    connect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    update?: MfTransactionUpdateWithWhereUniqueWithoutFundInput | MfTransactionUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: MfTransactionUpdateManyWithWhereWithoutFundInput | MfTransactionUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: MfTransactionScalarWhereInput | MfTransactionScalarWhereInput[]
  }

  export type NavHistoryUncheckedUpdateManyWithoutFundNestedInput = {
    create?: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput> | NavHistoryCreateWithoutFundInput[] | NavHistoryUncheckedCreateWithoutFundInput[]
    connectOrCreate?: NavHistoryCreateOrConnectWithoutFundInput | NavHistoryCreateOrConnectWithoutFundInput[]
    upsert?: NavHistoryUpsertWithWhereUniqueWithoutFundInput | NavHistoryUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: NavHistoryCreateManyFundInputEnvelope
    set?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    disconnect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    delete?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    connect?: NavHistoryWhereUniqueInput | NavHistoryWhereUniqueInput[]
    update?: NavHistoryUpdateWithWhereUniqueWithoutFundInput | NavHistoryUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: NavHistoryUpdateManyWithWhereWithoutFundInput | NavHistoryUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: NavHistoryScalarWhereInput | NavHistoryScalarWhereInput[]
  }

  export type SipUncheckedUpdateManyWithoutFundNestedInput = {
    create?: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput> | SipCreateWithoutFundInput[] | SipUncheckedCreateWithoutFundInput[]
    connectOrCreate?: SipCreateOrConnectWithoutFundInput | SipCreateOrConnectWithoutFundInput[]
    upsert?: SipUpsertWithWhereUniqueWithoutFundInput | SipUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: SipCreateManyFundInputEnvelope
    set?: SipWhereUniqueInput | SipWhereUniqueInput[]
    disconnect?: SipWhereUniqueInput | SipWhereUniqueInput[]
    delete?: SipWhereUniqueInput | SipWhereUniqueInput[]
    connect?: SipWhereUniqueInput | SipWhereUniqueInput[]
    update?: SipUpdateWithWhereUniqueWithoutFundInput | SipUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: SipUpdateManyWithWhereWithoutFundInput | SipUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: SipScalarWhereInput | SipScalarWhereInput[]
  }

  export type MfTransactionUncheckedUpdateManyWithoutFundNestedInput = {
    create?: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput> | MfTransactionCreateWithoutFundInput[] | MfTransactionUncheckedCreateWithoutFundInput[]
    connectOrCreate?: MfTransactionCreateOrConnectWithoutFundInput | MfTransactionCreateOrConnectWithoutFundInput[]
    upsert?: MfTransactionUpsertWithWhereUniqueWithoutFundInput | MfTransactionUpsertWithWhereUniqueWithoutFundInput[]
    createMany?: MfTransactionCreateManyFundInputEnvelope
    set?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    disconnect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    delete?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    connect?: MfTransactionWhereUniqueInput | MfTransactionWhereUniqueInput[]
    update?: MfTransactionUpdateWithWhereUniqueWithoutFundInput | MfTransactionUpdateWithWhereUniqueWithoutFundInput[]
    updateMany?: MfTransactionUpdateManyWithWhereWithoutFundInput | MfTransactionUpdateManyWithWhereWithoutFundInput[]
    deleteMany?: MfTransactionScalarWhereInput | MfTransactionScalarWhereInput[]
  }

  export type FundCreateNestedOneWithoutNavHistoryInput = {
    create?: XOR<FundCreateWithoutNavHistoryInput, FundUncheckedCreateWithoutNavHistoryInput>
    connectOrCreate?: FundCreateOrConnectWithoutNavHistoryInput
    connect?: FundWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FundUpdateOneRequiredWithoutNavHistoryNestedInput = {
    create?: XOR<FundCreateWithoutNavHistoryInput, FundUncheckedCreateWithoutNavHistoryInput>
    connectOrCreate?: FundCreateOrConnectWithoutNavHistoryInput
    upsert?: FundUpsertWithoutNavHistoryInput
    connect?: FundWhereUniqueInput
    update?: XOR<XOR<FundUpdateToOneWithWhereWithoutNavHistoryInput, FundUpdateWithoutNavHistoryInput>, FundUncheckedUpdateWithoutNavHistoryInput>
  }

  export type FundCreateNestedOneWithoutSipsInput = {
    create?: XOR<FundCreateWithoutSipsInput, FundUncheckedCreateWithoutSipsInput>
    connectOrCreate?: FundCreateOrConnectWithoutSipsInput
    connect?: FundWhereUniqueInput
  }

  export type EnumSipFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.SipFrequency
  }

  export type EnumSipStatusFieldUpdateOperationsInput = {
    set?: $Enums.SipStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FundUpdateOneRequiredWithoutSipsNestedInput = {
    create?: XOR<FundCreateWithoutSipsInput, FundUncheckedCreateWithoutSipsInput>
    connectOrCreate?: FundCreateOrConnectWithoutSipsInput
    upsert?: FundUpsertWithoutSipsInput
    connect?: FundWhereUniqueInput
    update?: XOR<XOR<FundUpdateToOneWithWhereWithoutSipsInput, FundUpdateWithoutSipsInput>, FundUncheckedUpdateWithoutSipsInput>
  }

  export type FundCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FundCreateWithoutTransactionsInput, FundUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundCreateOrConnectWithoutTransactionsInput
    connect?: FundWhereUniqueInput
  }

  export type EnumMfTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MfTransactionType
  }

  export type FundUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<FundCreateWithoutTransactionsInput, FundUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundCreateOrConnectWithoutTransactionsInput
    upsert?: FundUpsertWithoutTransactionsInput
    connect?: FundWhereUniqueInput
    update?: XOR<XOR<FundUpdateToOneWithWhereWithoutTransactionsInput, FundUpdateWithoutTransactionsInput>, FundUncheckedUpdateWithoutTransactionsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSipFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.SipFrequency | EnumSipFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSipFrequencyFilter<$PrismaModel> | $Enums.SipFrequency
  }

  export type NestedEnumSipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SipStatus | EnumSipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSipStatusFilter<$PrismaModel> | $Enums.SipStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSipFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SipFrequency | EnumSipFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipFrequency[] | ListEnumSipFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumSipFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.SipFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSipFrequencyFilter<$PrismaModel>
    _max?: NestedEnumSipFrequencyFilter<$PrismaModel>
  }

  export type NestedEnumSipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SipStatus | EnumSipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SipStatus[] | ListEnumSipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSipStatusWithAggregatesFilter<$PrismaModel> | $Enums.SipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSipStatusFilter<$PrismaModel>
    _max?: NestedEnumSipStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumMfTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MfTransactionType | EnumMfTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMfTransactionTypeFilter<$PrismaModel> | $Enums.MfTransactionType
  }

  export type NestedEnumMfTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MfTransactionType | EnumMfTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MfTransactionType[] | ListEnumMfTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMfTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MfTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMfTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumMfTransactionTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NavHistoryCreateWithoutFundInput = {
    id?: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
  }

  export type NavHistoryUncheckedCreateWithoutFundInput = {
    id?: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
  }

  export type NavHistoryCreateOrConnectWithoutFundInput = {
    where: NavHistoryWhereUniqueInput
    create: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput>
  }

  export type NavHistoryCreateManyFundInputEnvelope = {
    data: NavHistoryCreateManyFundInput | NavHistoryCreateManyFundInput[]
    skipDuplicates?: boolean
  }

  export type SipCreateWithoutFundInput = {
    id?: string
    investorRef: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SipUncheckedCreateWithoutFundInput = {
    id?: string
    investorRef: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SipCreateOrConnectWithoutFundInput = {
    where: SipWhereUniqueInput
    create: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput>
  }

  export type SipCreateManyFundInputEnvelope = {
    data: SipCreateManyFundInput | SipCreateManyFundInput[]
    skipDuplicates?: boolean
  }

  export type MfTransactionCreateWithoutFundInput = {
    id?: string
    investorRef: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
  }

  export type MfTransactionUncheckedCreateWithoutFundInput = {
    id?: string
    investorRef: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
  }

  export type MfTransactionCreateOrConnectWithoutFundInput = {
    where: MfTransactionWhereUniqueInput
    create: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput>
  }

  export type MfTransactionCreateManyFundInputEnvelope = {
    data: MfTransactionCreateManyFundInput | MfTransactionCreateManyFundInput[]
    skipDuplicates?: boolean
  }

  export type NavHistoryUpsertWithWhereUniqueWithoutFundInput = {
    where: NavHistoryWhereUniqueInput
    update: XOR<NavHistoryUpdateWithoutFundInput, NavHistoryUncheckedUpdateWithoutFundInput>
    create: XOR<NavHistoryCreateWithoutFundInput, NavHistoryUncheckedCreateWithoutFundInput>
  }

  export type NavHistoryUpdateWithWhereUniqueWithoutFundInput = {
    where: NavHistoryWhereUniqueInput
    data: XOR<NavHistoryUpdateWithoutFundInput, NavHistoryUncheckedUpdateWithoutFundInput>
  }

  export type NavHistoryUpdateManyWithWhereWithoutFundInput = {
    where: NavHistoryScalarWhereInput
    data: XOR<NavHistoryUpdateManyMutationInput, NavHistoryUncheckedUpdateManyWithoutFundInput>
  }

  export type NavHistoryScalarWhereInput = {
    AND?: NavHistoryScalarWhereInput | NavHistoryScalarWhereInput[]
    OR?: NavHistoryScalarWhereInput[]
    NOT?: NavHistoryScalarWhereInput | NavHistoryScalarWhereInput[]
    id?: UuidFilter<"NavHistory"> | string
    fundId?: UuidFilter<"NavHistory"> | string
    nav?: DecimalFilter<"NavHistory"> | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFilter<"NavHistory"> | Date | string
    createdAt?: DateTimeFilter<"NavHistory"> | Date | string
  }

  export type SipUpsertWithWhereUniqueWithoutFundInput = {
    where: SipWhereUniqueInput
    update: XOR<SipUpdateWithoutFundInput, SipUncheckedUpdateWithoutFundInput>
    create: XOR<SipCreateWithoutFundInput, SipUncheckedCreateWithoutFundInput>
  }

  export type SipUpdateWithWhereUniqueWithoutFundInput = {
    where: SipWhereUniqueInput
    data: XOR<SipUpdateWithoutFundInput, SipUncheckedUpdateWithoutFundInput>
  }

  export type SipUpdateManyWithWhereWithoutFundInput = {
    where: SipScalarWhereInput
    data: XOR<SipUpdateManyMutationInput, SipUncheckedUpdateManyWithoutFundInput>
  }

  export type SipScalarWhereInput = {
    AND?: SipScalarWhereInput | SipScalarWhereInput[]
    OR?: SipScalarWhereInput[]
    NOT?: SipScalarWhereInput | SipScalarWhereInput[]
    id?: UuidFilter<"Sip"> | string
    investorRef?: StringFilter<"Sip"> | string
    fundId?: UuidFilter<"Sip"> | string
    amount?: DecimalFilter<"Sip"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFilter<"Sip"> | $Enums.SipFrequency
    status?: EnumSipStatusFilter<"Sip"> | $Enums.SipStatus
    startDate?: DateTimeFilter<"Sip"> | Date | string
    nextDueDate?: DateTimeNullableFilter<"Sip"> | Date | string | null
    mandateId?: StringNullableFilter<"Sip"> | string | null
    createdAt?: DateTimeFilter<"Sip"> | Date | string
    updatedAt?: DateTimeFilter<"Sip"> | Date | string
  }

  export type MfTransactionUpsertWithWhereUniqueWithoutFundInput = {
    where: MfTransactionWhereUniqueInput
    update: XOR<MfTransactionUpdateWithoutFundInput, MfTransactionUncheckedUpdateWithoutFundInput>
    create: XOR<MfTransactionCreateWithoutFundInput, MfTransactionUncheckedCreateWithoutFundInput>
  }

  export type MfTransactionUpdateWithWhereUniqueWithoutFundInput = {
    where: MfTransactionWhereUniqueInput
    data: XOR<MfTransactionUpdateWithoutFundInput, MfTransactionUncheckedUpdateWithoutFundInput>
  }

  export type MfTransactionUpdateManyWithWhereWithoutFundInput = {
    where: MfTransactionScalarWhereInput
    data: XOR<MfTransactionUpdateManyMutationInput, MfTransactionUncheckedUpdateManyWithoutFundInput>
  }

  export type MfTransactionScalarWhereInput = {
    AND?: MfTransactionScalarWhereInput | MfTransactionScalarWhereInput[]
    OR?: MfTransactionScalarWhereInput[]
    NOT?: MfTransactionScalarWhereInput | MfTransactionScalarWhereInput[]
    id?: UuidFilter<"MfTransaction"> | string
    investorRef?: StringFilter<"MfTransaction"> | string
    fundId?: UuidFilter<"MfTransaction"> | string
    type?: EnumMfTransactionTypeFilter<"MfTransaction"> | $Enums.MfTransactionType
    units?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    nav?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"MfTransaction"> | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFilter<"MfTransaction"> | Date | string
    idempotencyKey?: StringNullableFilter<"MfTransaction"> | string | null
    createdAt?: DateTimeFilter<"MfTransaction"> | Date | string
  }

  export type FundCreateWithoutNavHistoryInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    sips?: SipCreateNestedManyWithoutFundInput
    transactions?: MfTransactionCreateNestedManyWithoutFundInput
  }

  export type FundUncheckedCreateWithoutNavHistoryInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    sips?: SipUncheckedCreateNestedManyWithoutFundInput
    transactions?: MfTransactionUncheckedCreateNestedManyWithoutFundInput
  }

  export type FundCreateOrConnectWithoutNavHistoryInput = {
    where: FundWhereUniqueInput
    create: XOR<FundCreateWithoutNavHistoryInput, FundUncheckedCreateWithoutNavHistoryInput>
  }

  export type FundUpsertWithoutNavHistoryInput = {
    update: XOR<FundUpdateWithoutNavHistoryInput, FundUncheckedUpdateWithoutNavHistoryInput>
    create: XOR<FundCreateWithoutNavHistoryInput, FundUncheckedCreateWithoutNavHistoryInput>
    where?: FundWhereInput
  }

  export type FundUpdateToOneWithWhereWithoutNavHistoryInput = {
    where?: FundWhereInput
    data: XOR<FundUpdateWithoutNavHistoryInput, FundUncheckedUpdateWithoutNavHistoryInput>
  }

  export type FundUpdateWithoutNavHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sips?: SipUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUpdateManyWithoutFundNestedInput
  }

  export type FundUncheckedUpdateWithoutNavHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sips?: SipUncheckedUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUncheckedUpdateManyWithoutFundNestedInput
  }

  export type FundCreateWithoutSipsInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryCreateNestedManyWithoutFundInput
    transactions?: MfTransactionCreateNestedManyWithoutFundInput
  }

  export type FundUncheckedCreateWithoutSipsInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryUncheckedCreateNestedManyWithoutFundInput
    transactions?: MfTransactionUncheckedCreateNestedManyWithoutFundInput
  }

  export type FundCreateOrConnectWithoutSipsInput = {
    where: FundWhereUniqueInput
    create: XOR<FundCreateWithoutSipsInput, FundUncheckedCreateWithoutSipsInput>
  }

  export type FundUpsertWithoutSipsInput = {
    update: XOR<FundUpdateWithoutSipsInput, FundUncheckedUpdateWithoutSipsInput>
    create: XOR<FundCreateWithoutSipsInput, FundUncheckedCreateWithoutSipsInput>
    where?: FundWhereInput
  }

  export type FundUpdateToOneWithWhereWithoutSipsInput = {
    where?: FundWhereInput
    data: XOR<FundUpdateWithoutSipsInput, FundUncheckedUpdateWithoutSipsInput>
  }

  export type FundUpdateWithoutSipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUpdateManyWithoutFundNestedInput
  }

  export type FundUncheckedUpdateWithoutSipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUncheckedUpdateManyWithoutFundNestedInput
    transactions?: MfTransactionUncheckedUpdateManyWithoutFundNestedInput
  }

  export type FundCreateWithoutTransactionsInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryCreateNestedManyWithoutFundInput
    sips?: SipCreateNestedManyWithoutFundInput
  }

  export type FundUncheckedCreateWithoutTransactionsInput = {
    id?: string
    schemeCode: string
    name: string
    category: string
    amc: string
    riskLevel: string
    createdAt?: Date | string
    navHistory?: NavHistoryUncheckedCreateNestedManyWithoutFundInput
    sips?: SipUncheckedCreateNestedManyWithoutFundInput
  }

  export type FundCreateOrConnectWithoutTransactionsInput = {
    where: FundWhereUniqueInput
    create: XOR<FundCreateWithoutTransactionsInput, FundUncheckedCreateWithoutTransactionsInput>
  }

  export type FundUpsertWithoutTransactionsInput = {
    update: XOR<FundUpdateWithoutTransactionsInput, FundUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FundCreateWithoutTransactionsInput, FundUncheckedCreateWithoutTransactionsInput>
    where?: FundWhereInput
  }

  export type FundUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FundWhereInput
    data: XOR<FundUpdateWithoutTransactionsInput, FundUncheckedUpdateWithoutTransactionsInput>
  }

  export type FundUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUpdateManyWithoutFundNestedInput
    sips?: SipUpdateManyWithoutFundNestedInput
  }

  export type FundUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schemeCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amc?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navHistory?: NavHistoryUncheckedUpdateManyWithoutFundNestedInput
    sips?: SipUncheckedUpdateManyWithoutFundNestedInput
  }

  export type NavHistoryCreateManyFundInput = {
    id?: string
    nav: Decimal | DecimalJsLike | number | string
    navDate: Date | string
    createdAt?: Date | string
  }

  export type SipCreateManyFundInput = {
    id?: string
    investorRef: string
    amount: Decimal | DecimalJsLike | number | string
    frequency: $Enums.SipFrequency
    status?: $Enums.SipStatus
    startDate: Date | string
    nextDueDate?: Date | string | null
    mandateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MfTransactionCreateManyFundInput = {
    id?: string
    investorRef: string
    type: $Enums.MfTransactionType
    units: Decimal | DecimalJsLike | number | string
    nav: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    executedAt: Date | string
    idempotencyKey?: string | null
    createdAt?: Date | string
  }

  export type NavHistoryUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavHistoryUncheckedUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavHistoryUncheckedUpdateManyWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    navDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipUncheckedUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SipUncheckedUpdateManyWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumSipFrequencyFieldUpdateOperationsInput | $Enums.SipFrequency
    status?: EnumSipStatusFieldUpdateOperationsInput | $Enums.SipStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextDueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mandateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionUncheckedUpdateWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MfTransactionUncheckedUpdateManyWithoutFundInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorRef?: StringFieldUpdateOperationsInput | string
    type?: EnumMfTransactionTypeFieldUpdateOperationsInput | $Enums.MfTransactionType
    units?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nav?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}