

export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
  user_type: string;
}

// solution 1
export interface GuestSegment extends Pick<BasicSegment, "id" | "uri">, Pick<MemberSegment, "user_type"> {}

// solution 2
export interface GuestSegment extends Omit<BasicSegment, 'page'>, Pick<MemberSegment, 'user_type'>{}
