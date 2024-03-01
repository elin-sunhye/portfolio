export interface menuType {
  seq: number;
  parentSeq: number | null;
  menu: string;
  url: string;
  title: string;
  hasChild: boolean;
  depth: number;
  sort: number;
}
