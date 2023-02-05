export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
}

export interface UserSegment extends BasicSegment, MemberSegment {}
