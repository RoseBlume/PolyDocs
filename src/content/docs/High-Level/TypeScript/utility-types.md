---
title: 'Utility Types'
sidebar:
  order: 14
---

 

TypeScript provides several utility types to facilitate common type transformations. These utility types make it easier to manipulate and transform types, making your code more concise and expressive. Here are some of the most commonly used utility types:





The `Partial` utility type constructs a type with all properties of `T` set to optional. This is useful when you want to create a type that represents a subset of another type.



```typescript

interface User {

    id: number;

    name: string;

    email: string;

}



type PartialUser = Partial<User>;

// PartialUser is { id?: number; name?: string; email?: string; }

```





The `Readonly` utility type constructs a type with all properties of `T` set to readonly. This means that the properties of the type cannot be reassigned.



```typescript

interface User {

    id: number;

    name: string;

    email: string;

}



type ReadonlyUser = Readonly<User>;

// ReadonlyUser is { readonly id: number; readonly name: string; readonly email: string; }

```





The `Pick` utility type constructs a type by picking a set of properties `K` from `T`. This is useful when you want to create a type that only includes certain properties from another type.



```typescript

interface User {

    id: number;

    name: string;

    email: string;

}



type UserPreview = Pick<User, 'id' | 'name'>;

// UserPreview is { id: number; name: string; }

```





The `Omit` utility type constructs a type by omitting a set of properties `K` from `T`. This is useful when you want to create a type that excludes certain properties from another type.



```typescript

interface User {

    id: number;

    name: string;

    email: string;

}



type UserWithoutEmail = Omit<User, 'email'>;

// UserWithoutEmail is { id: number; name: string; }

```





The `Record` utility type constructs a type with a set of properties `K` of type `T`. This is useful when you want to create a type that represents an object with a specific set of keys and values.



```typescript

type Role = 'admin' | 'user' | 'guest';



type Permissions = Record<Role, boolean>;

// Permissions is { admin: boolean; user: boolean; guest: boolean; }

```



These utility types are just a few examples of the powerful type manipulation capabilities provided by TypeScript. By leveraging these utility types, you can write more flexible and maintainable code.
