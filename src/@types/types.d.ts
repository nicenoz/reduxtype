// /src/@types/types.d.ts
declare module 'myModule' {
    export declare namespace myModule {
        type Foo = string;
        interface Bar {
            baz: number
        }

        type objType = {
            counter: {
                number: number
            },
        }

        type actionType = {type: string};
        type initialType = {number: number, age: number};
    }
}