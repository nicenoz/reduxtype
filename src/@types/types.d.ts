// /src/@types/types.d.ts
declare module 'myModule' {
    export namespace myNamespace {
        type Foo = string;
        interface Bar {
            baz: number
        }

        type objType = {
            counter: {
                number: number
            },
        }
    }

}