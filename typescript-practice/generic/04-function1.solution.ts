// type
type FnTypeT = <T>(input: T) => T[]

// 等同於interface寫法
interface FnTypeI {
	<T>(input: T): T[];
}

export const fn: FnTypeT = (input) => {
	return Array(~~(Math.random() * 10)).fill(0).map(() => input);
}

fn(10); // number[]
fn('hi'); // string[]