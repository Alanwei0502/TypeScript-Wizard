export type Entity = { type: 'user' } | { type: 'post' } | { type: 'comment' };

// 請實作出動態生成對應類型的id，如下
type EntityWithId =
  | {
      type: 'user';
      userId: string;
    }
  | {
      type: 'post';
      postId: string;
    }
  | {
      type: 'comment';
      commentId: string;
    };
