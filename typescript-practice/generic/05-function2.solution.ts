type ReturnedVal<T> = { value: T };
// type
type FnTypeT<T> = (input: T) => {
    getVal: () => ReturnedVal<T>;
    setVal: (newVal: T) =>  ReturnedVal<T>;
}
  
// interface
interface FnTypeI<T> {
    (input: T): {
        getVal(): ReturnedVal<T>;
        setVal(newVal: T): ReturnedVal<T>;
    } 
}


// 實現以下需求
export const fn: FnTypeT<string> = (input) => {
    const val = { value: input };

    return {
        getVal: () => val,
        setVal: (newVal) => {
            val.value = newVal;
            return val;
        },
    };
};