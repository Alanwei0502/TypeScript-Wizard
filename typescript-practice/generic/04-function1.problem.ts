// 將以下泛型寫完整
// type
type FnTypeT = <>(input) => //...?

// 等同於interface寫法
interface FnTypeI {
	<>(input): //...?
}

// 實現以下需求
export const fn: FnTypeT = (input) => {
	return Array(~~(Math.random() * 10)).fill(0).map(() => input);
}

fn(10); // number[]
fn('hi'); // string[]
